src
├── compiler        # 编译相关 
├── core            # 核心代码 
├── platforms       # 不同平台的支持
├── server          # 服务端渲染
├── sfc             # .vue 文件解析
├── shared          # 共享代码

compiler
把模板解析成 ast 语法树，ast 语法树优化，代码生成等功能。
编译的工作可以在构建时做（借助 webpack、vue-loader 等辅助插件）；也可以在运行时做，使用包含构建功能的 Vue.js

core
 Vue.js 的核心代码，包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数

 platform
 Vue.js 是一个跨平台的 MVVM 框架，它可以跑在 web 上，也可以配合 weex 跑在 native 客户端上

 server
 服务端渲染，服务端渲染主要的工作是把组件渲染为服务器端的 HTML 字符串

 sfc
 把 .vue 文件内容解析成一个 JavaScript 的对象

 shared
 里定义的工具方法都是会被浏览器端的 Vue.js 和服务端的 Vue.js 所共享的。
 