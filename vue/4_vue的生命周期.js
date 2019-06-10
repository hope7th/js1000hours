// create和mounted 的区别
// 在created()钩子函数执行的时候DOM 其实并未进行任何渲染，一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。
//
// 1：beforeCreate:初始化部分参数，如果有相同的参数，做参数合并，执行beforeCreate
// 2:在created:初始化Inject,Provide,props,methods,data,computed,watch,执行ceated
// 3:beforeMount:检查是否存在el属性，如果存在，进行渲染DOM操作，执行，beforeMount方法
// 4:实例化watcher,渲染dom,执行mounted;
// 5:beforeUpdate,数据更新时候，执行beforeupdate;
// 6:updated;检查当前watcher列表中，是否存在需要更新的数据watcher,如果存在，执行updated;
// 7:beforeDestory,检查是否被卸载，卸载直接return,否则执行beforeDestory
// 8:destoryed;全部删掉