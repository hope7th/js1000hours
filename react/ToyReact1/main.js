/*

在webpack.config.js中，以下插件的作用
 plugins: [[
     '@babel/plugin-transform-react-jsx',
    {pragma: 'ToyReact.createElement'}
]]
转换前
let a = <MyComponent name="a"/> 
转换后
var a = createElement(MyComponent,{name:a}

    let b = <div name="a"/> 
    在createElement arguments 中小写的div会被按照字符串传进去，”div“
*/

import {
    ToyReact
} from "./ToyReact.js"

let a = <div name="a" id="ida">
    <span></span>
    <span></span>
    <span></span>
</div>;
console.log("a:",a);
document.body.appendChild(a)
