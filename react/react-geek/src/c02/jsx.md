1：jsx本身就是表达式：const element = <h1> hello,world!<h1>
2：在属性中使用表达式：<MyComment foo={1+2+3+4}>
3：延展属性 const props ={firstName:"B",lastName:"H"};
   const greeting = <Greeting {...props} />;
4：表达式作为子元素 const element = <li>{props.message}</li>

jsx不需要解释器，不是模版语言，是语法糖（动态创建标签的形式），

jsx约定
1:React认为小写的原生DOM节点
2:大写字母开头认为是自定义组建。

比喻：js是一个庆国国王，js引擎是庆国朝廷，国王权力只有通过朝廷才能施展。ts是朝廷颁发的新政。
angular是皇长子，jsx是皇二子，vue是皇三子，他们分别超不同的方向发展。他们分别走不同的路，jsx是动态创建标签，vue有自己的模版，angular和vue一样。
皇二子如日中天，皇长子略微没落，皇三子偏安东部。



