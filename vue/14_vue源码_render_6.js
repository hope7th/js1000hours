// Vue 的 _render 方法是实例的一个私有方法，它用来把实例渲染成一个虚拟 Node 在src/core/instance/render.js中

Vue.prototype._render = function (): VNode {
    const vm: Component = this
    const {
        render,
        _parentVnode
    } = vm.$options

    // reset _rendered flag on slots for duplicate slot check
    if (process.env.NODE_ENV !== 'production') {
        for (const key in vm.$slots) {
            // $flow-disable-line
            vm.$slots[key]._rendered = false
        }
    }

    if (_parentVnode) {
        vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode
    // render self
    let vnode
    try {
        vnode = render.call(vm._renderProxy, vm.$createElement)
    } catch (e) {
        handleError(e, vm, `render`)
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (process.env.NODE_ENV !== 'production') {
            if (vm.$options.renderError) {
                try {
                    vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
                } catch (e) {
                    handleError(e, vm, `renderError`)
                    vnode = vm._vnode
                }
            } else {
                vnode = vm._vnode
            }
        } else {
            vnode = vm._vnode
        }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
        if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
            warn(
                'Multiple root nodes returned from render function. Render function ' +
                'should return a single root node.',
                vm
            )
        }
        vnode = createEmptyVNode()
    }
    // set parent
    vnode.parent = _parentVnode
    return vnode
}

// 在 Vue 的官方文档中介绍了 render 函数的第一个参数是 createElement，

const demo = {
    template: `<div id="app">{{ message }}</div>`,
    render: function (createElement) {
        return createElement('div', {
           attrs: {
              id: 'app'
            },
        }, this.message)
      }
}

vnode = render.call(vm._renderProxy, vm.$createElement)

export function initRender (vm: Component) {
    // ...
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
  }

//  蚍蜉妈妈和蚍蜉爸爸，通过createElement方式生成受精卵 这个受精卵就是vnode.这是最令人兴奋的一步。
//  vm._render 最终是通过执行 createElement 方法并返回的是 vnode，它是一个虚拟 Node。
  