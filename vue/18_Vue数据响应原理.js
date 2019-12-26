import { initRender } from "./14_vue源码_render_6";

// 1，data:定义数据模型初始值，prop 传递的值。
// 2，watch,监听某一个值变化，后续业务处理。
// 3，computed:页面展现的值是多个值的组合变化。

var user = {}
var name;
Object.defineProperty(user, 'current', {
    get: function () {
        console.log("获取名称");
        return name
    },
    set: function (val) {
        console.log("设置名称")
        name = val;
    }
})

user.current = "张三"
console.log(user.current)

//API getter和setter就是数据劫持的基础，通过这个例子我们看到，在设置数据或获取数据的时候，我们都可以加入自己的处理逻辑。从而达到我们监听数据变化的目的。

Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
        const value = getter ? getter.call(obj) : val
        if (Dep.target) {
            dep.depend()
            if (childOb) {
                childOb.dep.depend()
                if (Array.isArray(value)) {
                    dependArray(value)
                }
            }
        }
        return value
    },
    set: function reactiveSetter(newVal) {
        const value = getter ? getter.call(obj) : val
        if (newVal === value || (newVal !== newVal && value !== value)) {
            return
        }
        if (process.env.NODE_ENV !== 'production' && customSetter) {
            customSetter()
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) return
        if (setter) {
            setter.call(obj, newVal)
        } else {
            val = newVal
        }
        childOb = !shallow && observe(newVal)
        dep.notify()
    }
})

//  当监听到数据变化时，我们通过Watcher来发送通知
//  当获取数据的时候，我们把Watcher加入到通知列表



new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})


// new Vue() ->...-> initRender(vdom的createElement)->...->initState(data,props,methods,)

// InitRender阶段,绑定组件的渲染方法
// InitState阶段,创建数据模型,监听器,计算属性的Watcher
// $mount阶段,创建组件Watcher
Vue.prototype.$watch = function (
    expOrFn: string | Function,
    cb: any,
    options?: Object
  ): Function {
    const vm: Component = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value)
      } catch (error) {
        handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
      }
    }
    return function unwatchFn () {
      watcher.teardown()
    }
  }

  const watcher = new Watcher(vm, expOrFn, cb, options)
