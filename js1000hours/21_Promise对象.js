//Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果
//Promise 是一个对象，从它可以获取异步操作的消息
function timeout(ms) {
    return new Promise(((resolve, reject) => {
        setTimeout(resolve,ms,'done')
        //s
    }))
}

timeout(1000).then((value => {
    console.log(value)
}))

// setTimeout 可以接受多个参数
function sum(x,y) {
    console.log(x+y)
}

setTimeout(sum,100,1,3);

let promise = new Promise(function (resolve, reject) {
   console.log('Promise');
   resolve()
});

promise.then(function () {
    console.log('resolved.')
});

console.log('HI');

//异步加载图片
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = function () {
            resolve(url)
        };

        image.onerror = function () {
            reject(new Error('Could not load image at'+url))
        }
        image.src = url
    })
}
////nodejs无Image对象，无法读取
// var imgUrl = 'http://img2.imgtn.bdimg.com/it/u=3588772980,2454248748&fm=27&gp=0.jpg';
// loadImageAsync(imgUrl).then((value => {
//     console.info(value)
// }),(error=> {
//     console.info(error);
// }));

// 与传统方案比较
//1:传统异步编程的解决方案：回调函数。
//2:可以储存状态，从pending变为fulfilled，从pending变为rejected。如果改变已经发生了，你再对promise对象添加回调函数，也会立即得到这个结果。这与事件（event）完全不同，事件的特点是：如果你错过了它，再去监听是得不到结果的。


