vm.$nextTick( [callback] )
官方解释： 将回调延迟到下次 DOM 更新循环之后执行
要理解这句话，首先要了解一下vue的异步更新队列，Vue 异步执行 DOM 更新。
只要观察到数据变化，不会立即更新DOM,Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。
如果同一个 数据被的多次 改变，只会被推入到队列中一次。例如，当你设置 vm.someData = 'new value' ，
对应的DOM更新会被推到一个队列里，该组件不会立即重新渲染，会在当前tick完毕后，在下一个tick中渲染DOM。
在事件循环中，每进行一次循环操作称为tick。
而nextTick函数就是vue提供的一个实例方法，数据更新后等待下一个tick里Dom更新完后执行回调，回调的 this 自动绑定到调用它的实例上。

html:
<span class="test">{{egData}}</span>
<el-button @click="changeData">改变</el-button>

js：
new Vue({
	data () {
		return {
			egData: 'old Message'
		}
	}
    methods: {
        changeData () {
          this.egData = 'new Message'
          console.log($('.test').html(), '-----------------------')
        }
  	}
})

结果： 第一次点击输出 old Message -----------------------，第二次点击输出 new Message -----------------------


js：
new Vue({
	data () {
		return {
			egData: 'old Message'
		}
	}
    methods: {
        changeData () {
          this.egData = 'new Message'
          this.$nextTick(function () {
          	console.log($('.test').html(), '-----------------------')
          })

        }
  	}
})
不管第几次点击，都输出 new Message -----------------------

$nextTick使用场景：
1、数据更新后想要马上操作新的DOM，需要把操作写在nextTick的回调里
2、在created钩子函数里需要操作DOM，也可以把操作写在nextTick的回调里,(created钩子函数里还没有挂载dom，所以直接操作会有问题)


$forceUpdate()
迫使Vue实例重新（rander）渲染虚拟DOM，注意并不是重新加载组件。结合vue的生命周期，调用$forceUpdate后只会触发beforeUpdate和updated这两个钩子函数，不会触发其他的钩子函数。它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
$forceUpdate()使用场景：
1、当在data里没有显示的声明一个对象的属性，而是之后给该对象添加属性，这种情况vue是检测不到数据变化的，可以使用$forceUpdate()
html:

<span class="test">{{egData.value}}</span>
<el-button @click="changeData">改变</el-button>

js:
egData: {}

...


changeData () {
    this.egData.value = 'oldValue'
    this.$forceUpdate()  // dom会更新
}

复制代码但是这种做法并不推荐，官方说如果你现在的场景需要用forceUpdate方法
,那么99%是你的操作有问题，如上data里不显示声明对象的属性，之后添加属性时正确的做法时用
vm.$set() 方法，所以forceUpdate请慎用

作者：南风知我意NY
链接：https://juejin.im/post/5ca56ac951882543d6528d11
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




