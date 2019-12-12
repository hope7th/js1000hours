1：jsx本身就是表达式：const element = <h1> hello,world!<h1>
2：在属性中使用表达式：<MyComment foo={1+2+3+4}>
3：延展属性 const props ={firstName:"B",lastName:"H"};
   const greeting = <Greeting {...props} />;
4：表达式作为子元素 const element = <li>{props.message}</li>

jsx约定
1:React认为小写的原生DOM节点
2:大写字母开头认为是自定义组建。
