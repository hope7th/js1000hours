webpack 只支持js和json，通过loaders去支持其他文件类型
babel_loader es6 es7
css_loader  css
less_loader less->css
ts_loader   ts-js
file_loader  图片字体
raw_loader  文件以字符串的形式导入
thread_loader  多线程打包js和css

module:{
    rules:{
        {test:/\.txt$/,use:'raw_loader'}
    }
}
