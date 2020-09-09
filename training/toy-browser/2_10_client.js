const net = require("net");
const parser = require("./3_1_parser")
const images = require("images")
const  render = require("./4_5_render")
class Request {
    constructor(options) {
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || "/";
        this.body = options.body || {};
        this.headers= options.headers || {};
        if (!this.headers["Content-Type"]) {
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if (this.headers["Content-Type"] == "application/json") {
            this.bodyText = JSON.stringify(this.body);
        } else if (this.headers["Content-Type"] == "application/x-www-form-urlencoded") {
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join("&");
        }
        this.headers["Content-Length"] = this.bodyText.length;

    }
    send(connection) {
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser;
            if (connection) {
                connection.write(this.toString());
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    // console.log(this.toString())
                    connection.write(this.toString())
                })
            }
            connection.on("data", (data) => {
                // console.log(data.toString());
                parser.receive(data.toString());
                if (parser.isFinished) {
                    resolve(parser.response);
                    connection.end();
                }
            });
            connection.on("error", (err) => {
                console.log(err)
                reject(err);
                connection.end();
            })

        })
    }
//     toString() {
//         return `${this.method} ${this.path} HTTP/1.1\r\nHost: ${this.host}\r\n
// ${Object.keys(this.headers).map(key=>`${key}:${this.headers[key]}`).join('\r\n')}\r\r${this.bodyText}`
//     }

    toString(){
        return `${this.method} ${this.path} HTTP/1.1\r\nHost: ${this.host}\r\n${Object.keys(this.headers).map(key=> `${key}: ${this.headers[key]}`).join('\r\n')}\r\n\r\n${this.bodyText}\r\n`
      }
}
class TrunkedBodyParser {
    constructor(){
        this.WAITING_LENGTH = 0;
        this.WAITING_LENGTH_LINE_END = 1;
        this.READING_TRUNK = 2;
        this.WAITING_NEW_LINE = 3;
        this.WAITING_NEW_LINE_END = 4;
        this.length = 0;
        this.content = [];
        this.isFinished = false;
        this.current = this.WAITING_LENGTH;
        
    }
   
    receiveChar(char){
        if(this.current === this.WAITING_LENGTH){
            if(char=== "\r"){
                if(this.length===0){
                    this.isFinished = true;
                }
                this.current = this.WAITING_LENGTH_LINE_END;
            }else {
                this.length *=16;
                this.length += parseInt(char,16);
            }
           
        }else if(this.current === this.WAITING_LENGTH_LINE_END){
            if(char ==="\n"){
                this.current = this.READING_TRUNK;
            }
        }else if(this.current === this.READING_TRUNK){
            this.content.push(char);
            this.length --;
            if(this.length ===0){
                this.current = this.WAITING_NEW_LINE;
            }
        }else if(this.current ===this.WAITING_NEW_LINE){
            if(char==="\r"){
                this.current = this.WAITING_NEW_LINE_END;
            }
        }else if(this.current ===this.WAITING_NEW_LINE_END){
            if(char==="\n"){
                this.current = this.WAITING_LENGTH;
            }
        }
    }
}
class ResponseParser {
    constructor() {
        this.WAITING_STATUS_LINE = 0;
        this.WAITING_STATUS_LINE_END = 1;

        this.WAITING_HEADER_NAME = 2;
        this.WAITING_HEADER_SPACE = 3;

        this.WAITING_HEADER_VALUE = 4;
        this.WAITING_HEADER_LINE_EDN = 5;

        this.WAITING_HEADER_BLOCK_END = 6;
        this.WAITING_BODY = 7;

        this.current = this.WAITING_STATUS_LINE;
        this.statusLine = "";
        this.headers = {};
        this.headerName = "";
        this.headerValue = "";
        this.bodyParser = null;
    } 
    get isFinished(){
        return this.bodyParser&&this.bodyParser.isFinished;
    }
    get response(){
        this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/);
        return {
            statusCode:RegExp.$1,
            statusText:RegExp.$2,
            headers:this.headers,
            body:this.bodyParser.content.join("")
        }
    }
   
    receive(string) {
        for (let i = 0; i < string.length; i++) {
            this.receiveChar(string.charAt(i));
        }
    }
    receiveChar(char) {
        if(this.current===this.WAITING_STATUS_LINE){
            if(char=="\r"){
                this.current = this.WAITING_STATUS_LINE_END
            }else {
                this.statusLine += char;
            }
        }else if(this.current===this.WAITING_STATUS_LINE_END){
            if(char=="\n"){
                this.current = this.WAITING_HEADER_NAME;
            }
        }else if(this.current===this.WAITING_HEADER_NAME){
            if(char===":"){
                this.current = this.WAITING_HEADER_SPACE;
            }else if(char==="\r"){
                this.current = this.WAITING_HEADER_BLOCK_END;
                if(this.headers["Transfer-Encoding"]==="chunked"){
                    this.bodyParser = new TrunkedBodyParser()
                }
            }else {
                this.headerName += char;
            }
        }else if(this.current===this.WAITING_HEADER_SPACE){
            if(char === " "){
                this.current = this.WAITING_HEADER_VALUE;
            }
        }else if(this.current === this.WAITING_HEADER_VALUE){
            if(char === "\r"){
                this.current = this.WAITING_HEADER_LINE_END;
                this.headers[this.headerName] = this.headerValue;
                this.headerName = "";
                this.headerValue = "";
            }else {
                this.headerValue +=char
            }
        }else if(this.current === this.WAITING_HEADER_LINE_END){
            if(char === '\n'){
              this.current = this.WAITING_HEADER_NAME;
            }
        }else if(this.current===this.WAITING_HEADER_BLOCK_END){
            if(char==="\n"){
                this.current = this.WAITING_BODY
            }
        }else if(this.current === this.WAITING_BODY){
            this.bodyParser.receiveChar(char)
        }
    }
  }

void async function () {
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: 8088,
        path: "/",
        headers: {
            ["X-F002"]: "customed"
        },
        body: {
            name: "winter"
        }
    })
    let response = await request.send();
    let dom = parser.paserHTML(response.body);
    let viewport = images(800,600);
    render(viewport,dom)
    viewport.save("viewport.jpg")
    // console.log(response);
}()

/**
 * http response 
 * status line 
 * HTTP/1.1(版本号) 200(http状态码) ok
 * headers
 * Content-Type:text/html
 * Date:
 * Connection:keep-alive
 * Transfer-Encondinng:chunked
 * 
 * body
 * <html><body>hello world<body><html>
 */

/**
* http 状态码
* 1**	信息，服务器收到请求，需要请求者继续执行操作
2**	成功，操作被成功接收并处理
3**	重定向，需要进一步的操作以完成请求
4**	客户端错误，请求包含语法错误或无法完成请求
5**	服务器错误，服务器在处理请求的过程中发生了错误
  * 
  */