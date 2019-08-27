1:注册组件
Vue.use = function (plugin: Function | Object) {
    //Vue构造函数上定义_installedPlugins 避免相同的插件注册多次
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // import是单例模式
    //所以plugin不论是Fuction还是Object同一个插件都是同一个
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    // Vue作为第一个参数传递给插件
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this // 返回的是this,可以链式调用
  }

  2:合并入vue对象

vue.prototype._init中合并options
 Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++
    let startTag, endTag
    ...
    vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
     ...
     // 挂载到dom上
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
}
复制代码在new Vue(options)时首先会执行this._init进行初始化，将Vue上的属性和options进行合并。

作者：猕猴桃豆老大
链接：https://juejin.im/post/5d5ea43fe51d4561f17a50cf
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

