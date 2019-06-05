// Promise 最本质的一个特征是:Promise 只能被决议一次(完成或拒绝)。在许多异步情况中，你只会获取一个值一次，所以这可以工作良好。
console.log("例1---")
new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('promise1');
  },1000)
}).then((value) => {
  // return new Promise((resolve,reject)=>{
  //   setTimeout(()=>{
  //     resolve('promis8');
  //   },1000)
  // })
  console.log('then11');
  console.log(value);
  new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('promise2');
    },5000)
  }).then((value) => {
    console.log('then21');
    console.log(value);
  }).then((value) => {
    console.log('then22');
    console.log(value);
  });
}).then(value => {
  console.log('then12');
  console.log(value)
  return 0
}).then(value => {
  console.log('then13');
  console.log(value)
});
console.log("例2---")
console.log("两层Promise")
//两层Promise
function add (xPromise,yPromise) {
  return Promise.all([xPromise,yPromise]).then(function (values) {
    return values[0]+values[1];
  })
}

function fetchX(){
  return new Promise((resolve,reject)=>{
    resolve(1)
  })
}
function fetchY(){
  return new Promise((resolve,reject)=>{
    resolve(12)
  })
}

add(fetchX(),fetchY()).then((sum)=>{
  console.log(sum)
})


//Promise.all([ .. ])调用创建了一个promise(这个 promise 等待 promiseX 和 promiseY 的决议)。

//链式调用 .then(..) 创建了 另外一个 promise。

//尽管第二个 then(..) 后面没有链接任何东西，但它实际上也创建了一个新的 promise，

//Promise 链。这就是Promise链的疑问



