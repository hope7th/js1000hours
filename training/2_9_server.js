const http = require("http");
http.createServer((request,response)=>{
    let body = [];
    request.on("error",(err)=>{
        console.error(err);
    }).on("data",(chunk)=>{
        console.log("here");
        // body.push(chunk.toString());
        body.push(Buffer.from(chunk));
    }).on("end",()=>{
        body = Buffer.concat(body).toString();
        console.log("body",body);
        response.writeHead(200, {"Content-Type":"text/html"});
        // response.end("Hello World\n");
        response.end("<html><body>hello world<body><html>");

    })
}).listen(8088);
console.log("server started");


/**
 * http 协议，文本型协议，里面内容都是字符串
 * request:line:post(method),http/1.1(path)
 * headers: Host:127.0.0.1
 *          Content-Type:application/x-www-form-urlencoded
 * body:field=aaa&code=x%3D1
 */
