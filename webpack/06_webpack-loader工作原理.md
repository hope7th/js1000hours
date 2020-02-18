一，loader工作原理
webpack 只能直接处理 javascript 格式的代码。任何非 js 文件都必须被预先处理转换为 js 代码，才可以参与打包。loader（加载器）就是这样一个代码转换器。它由 webpack 的 loader runner 执行调用，接收原始资源数据作为参数（当多个加载器联合使用时，上一个loader的结果会传入下一个loader），最终输出 javascript 代码（和可选的 source map）给 webpack 做进一步编译。

二、 Loader 执行顺序
1. 分类
pre： 前置loader
normal： 普通loader
inline： 内联loader
post： 后置loader
2. 执行优先级
4类 loader 的执行优级为：pre > normal > inline > post 。
相同优先级的 loader 执行顺序为：从右到左，从下到上。
3. 前缀的作用
内联 loader 可以通过添加不同前缀，跳过其他类型 loader。

! 跳过 normal loader。
-! 跳过 pre 和 normal loader。
!! 跳过 pre、 normal 和 post loader。

三、如何开发一个loader
