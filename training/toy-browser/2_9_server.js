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
        response.end(
`<html maaa=a >
<head>
<style>
#container {
    width:500px;
    height:300px;
    display:flex;
    background-color:rgb(255,255,255);
}
#container #myid {
    width:200px;
    height:100px;
    background-color:rgb(255,0,0);
}
#container .c1 {
    flex:1;
    background-color:rgb(255,0,0)
}
</style>
</head>
<body>
<div id="container">
<div id="myid" />
<div class="c1" />
</div>
</body>
</html>
`);

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
