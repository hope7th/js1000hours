// 作者：火狼1
// 链接：https://juejin.im/post/5d9d386fe51d45784d3f8637
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// 1.场景:如页面需要导入多个组件,原始写法:
import titleCom form "@/components/home/titleCom"
import bannerCom form "@/components/home/bannerCom"
import cellCom form "@/components/home/cellCom"
components:{titleCom,bannerCom,cellCom} //现代web省略写法

// 比喻：数学老师叫components，她以前收集作业，总是自己一个一个收集直到有一天，他找到一个叫modules的课代表，让她帮自己收集。课代表站在讲堂上喊道:我叫名字的，把作业叫上来。
// 然后拿出点名册，开始含名字。

const path = require("path")//拿到点名册
const files = require.context("@/components/home",false,/\.vue$/)//名字以.vue结尾的同学
const modules = {}
files.keys().forEach(key=>{
    const name = path.basename(key,'.vue')
    modules[name]=files(key).default||files(key) //files是一个函数吗，为什么能这样写
})
components:modules

// 实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用
// require.context(directory,useSubdirectories,regExp)
// 接收三个参数:
// directory：说明需要检索的目录
// useSubdirectories：是否检索子目录
// regExp: 匹配文件的正则表达式,一般是文件名



