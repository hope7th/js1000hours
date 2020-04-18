/* 
Node模块类型分为两种：核心模块和文件模块，并通过require方法来引入模块。前者是Node中内置的模块，而后者一般是用户自己定义的模块。后面提到的自定义模块也属于文件模块，只是为了区分说明。
 */
// 引入`http`内置模块
const http = require('http')

// 引入文件模块
const sum = require('./sum')

// 引入第三方包`koa`，这是一个自定义模块
const koa = require('koa')

/* 
   require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。
 */