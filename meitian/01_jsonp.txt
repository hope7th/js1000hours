请问JSONP为什么不能发POST请求？
第一句话： 因为JSONP是通过动态创建script实现的。
第二句话： 动态创建script的时候只能用GET，不能用POST

button.addEventListener('click', (e)=>{
     $.ajax({ // 这个名字跟ajax没有半毛钱关系，ajax是ajax，jsonp是jsonp
     url: "http://jack.com:8002/pay",
     dataType: "jsonp",
     success: function( response ) {
         if(response === 'success'){
         amount.innerText = amount.innerText - 1
         }
     }
     })
    
     $.jsonp()
})

作者：omnoob
链接：https://juejin.im/post/5d2547d36fb9a07ea33c3cfd
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

button.addEventListener('click', (e)=>{
    let script = document.createElement('script')
    let functionName = 'frank'+ parseInt(Math.random()*10000000 ,10)
    window[functionName] = function(){  // 每次请求之前搞出一个随机的函数
        amount.innerText = amount.innerText - 0 - 1
    }
    script.src = '/pay?callback=' + functionName
    document.body.appendChild(script)
    script.onload = function(e){ // 状态码是 200~299 则表示成功
        e.currentTarget.remove()
        delete window[functionName] // 请求完了就干掉这个随机函数
    }
    script.onerror = function(e){ // 状态码大于等于 400 则表示失败
        e.currentTarget.remove()
        delete window[functionName] // 请求完了就干掉这个随机函数
    }
})

作者：omnoob
链接：https://juejin.im/post/5d2547d36fb9a07ea33c3cfd
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。