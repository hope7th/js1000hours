var res = []
function response(data){
    var chunk = data.splice(0,1000);
    res = res.concat(chunk.map(function(val){
        return val * 2;
    }));
    if(data.length){
        setTimeout(function () {
            response(data)
        },0);
    }
}
//setTimeout(..0)（黑科技）来异步排程，基本上它的意思是“将这个函数贴在事件轮询队列的末尾”。