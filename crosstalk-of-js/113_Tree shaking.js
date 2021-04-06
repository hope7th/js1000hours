// Tree shaking 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 Dead code elimination

// 树摇，与commonjs和es6的区别有关。
// commonjs是动态加载模块，require()
// 在 ES6 中，引入了完全静态的导入语法：import
// tree shaking的原理：ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块，静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码


// 目前浏览器对 ES6 Module 兼容还不太好，我们平时在 Webpack 中使用的 export 和 import，会经过 Babel 转换为 CommonJS 规范。

// 1、CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

// 2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

// 3、CommonJs 是单个值导出，ES6 Module可以导出多个

// 4、CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层

// 5、CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined