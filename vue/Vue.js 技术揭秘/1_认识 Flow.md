Flow 是 facebook 出品的 JavaScript 静态类型检查工具

之所以选择 Flow，主要是因为 Babel 和 ESLint 都有对应的 Flow 插件以支持语法，可以完全沿用现有的构建配置，非常小成本的改动就可以拥有静态类型检查的能力

类型推断：通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型
类型注释：事先注释好我们期待的类型，Flow 会基于这些注释来判断。

类型推断

/*@flow*/

function split(str) {
  return str.split(' ')
}

split(11)
函数 split 期待的参数是字符串，而我们输入了数字。

类型注释

/*@flow*/

function add(x: number, y: number): number {
  return x + y
}

add('Hello', 11)
因为函数参数的期待类型为数字，而我们提供了字符串。

/*@flow*/

var arr: Array<number> = [1, 2, 3]

arr.push('Hello')
arr 是每项均为数字的数组。如果我们给这个数组添加了一个字符串，Flow 能检查出错误。

/*@flow*/

class Bar {
  x: string;           // x 是字符串
  y: string | number;  // y 可以是字符串或者数字
  z: boolean;

  constructor(x: string, y: string | number) {
    this.x = x
    this.y = y
    this.z = false
  }
}

var bar: Bar = new Bar('hello', 4)

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
}
属性 y 的类型中间用 | 做间隔，表示 y 的类型即可以是字符串也可以是数字

var foo: ?string = null
foo 可以为字符串，也可以为 null。


有时候我们想引用第三方库，或者自定义一些类型，但 Flow 并不认识，因此检查的时候会报错

 Vue.js 的主目录下有 .flowconfig 文件， 它是 Flow 的配置文件，感兴趣的同学可以看官方文档。这其中的 [libs] 部分用来描述包含指定库定义的目录，默认是名为 flow-typed 的目录。
[libs] 配置的是 flow，表示指定的库定义都在 flow 文件夹内

 flow
├── compiler.js        # 编译相关
├── component.js       # 组件数据结构
├── global-api.js      # Global API 结构
├── modules.js         # 第三方库定义
├── options.js         # 选项相关
├── ssr.js             # 服务端渲染相关
├── vnode.js           # 虚拟 node 相关