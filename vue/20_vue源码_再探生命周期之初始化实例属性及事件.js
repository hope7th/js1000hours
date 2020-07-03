// 作者：前端阳光
// 链接：https://juejin.im/post/5ef02c7851882565ba1d60bf
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
//一、初始化实例属性

Vue.prototype._init = function (options) {
    vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
    )

    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(VM, 'beforeCreate');
    initInjections(vm); //在data/props前初始化inject
    initState(vm);
    initProvide(vm); //在data/props前初始化provide
    callHook(vm, 'created');

    if (vm.$options.el) {
        vm.$mount(vm.$options.el);
    }
}

/**
 * 初始化阶段的属性、事件,如代码所示，研究initLifecycle，initEvents，initRender。
 * 这件这三个初始化 都在beforeCreate钩子函数触发前初始化的。
 */

/**
 * 以$开发的属性是提供给用户使用的外部属性，
 * 以_开头的属性是提供给内部使用的内部属性。
 * Vue.js通过initLifecycle函数向实例中挂载属性，
 */


export function initLifecycle(vm) {
    const options = vm.$options;
    //找出第一个非抽象父类
    let parent = options.parent;
    if (parent && !options.abstract) {
        while (parent.$options.abstract && parent.$parent) {
            parent = parent.$parent;
        }
        parent.$children.push(vm);
    }
    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
}

/**
 * vm.$parent属性，它需要找到第一个非抽象类型的父级，所以代码中会进行判断：
 * 如果当前组件不是抽象组件并且存在父级，那么需要通过while来自底向上循环。
 * 如果父级是抽象类，那么继续向上，直到遇到第一个非抽象类的父级时，将它赋值给vm.$parent属性。
 * (抽象类指的是transition，keepAlive这些)
 * 
 * vm.$children属性，它会包含当前实例的直接子组件。
 * 该属性的值是从子组件中主动添加到父组件中的。
 * parent.$children.push(vm)，就是将当前实例添加到父组件实例的$children属性中。
 * 
 * vm.$root，它标识当前组件树的根Vue.js实例。
 * 如果当前组件没有父组件，那么它自己其实就是根组件，它的$root属性是它自己，
 * 而它的子组件的vm.$root属性是沿用父级的$root，所以其直接子组件的$root属性还是它，
 * 其孙组件的$root属性沿用其直接子组件中的$root属性，以此类推。
 * 因此，这其实是自顶向下将根组件的$root依次传递给每一个子组件的过程。
 */


// 二、初始化事件
/**
 * （1）初始化事件是指将父组件在模板中使用的v-on注册的事件添加到子组件的事件系统（Vue.js的事件系统）中。
（2）Vue.js中，父组件可以在使用子组件的地方用v-on来监听子组件触发的事件。
（3）在模板编译阶段，可以得到某个标签上的所有属性，其中就包括使用v-on或@注册的事件。
（4）在模板编译阶段，我们会将整个模板编译成渲染函数，而渲染函数其实就是一些嵌套在一起的创建元素节点的函数。
（5）创建元素节点的函数是这样的：
_c(tagName,data,children)
(6）当渲染流程启动时，渲染函数会被执行并生成一份VNode，随后虚拟DOM会使用VNode进行对比与渲染。
（7）在这个过程中会创建一些元素，但此时会判断当前这个标签究竟是真的标签还是一个组件。
（8）如果是组件标签，那么会将子组件实例化并给它传递一些参数，其中就包括父组件在模板中使用v-on注册在子组件标签上的事件；
（9）如果是平台标签，则创建元素并插入到DOM中，同时会将标签上使用v-on注册的事件注册到浏览器事件中。
（10）即，如果v-on写在组件标签上，那么这个事件会注册到子组件Vue.js事件系统中；如果是写在平台标签上，例如div，那么事件会被注册到浏览器事件中。
（11）子组件在初始化时，也就是初始化Vue.js实例时，有可能会接收父组件向子组件注册的事件。而子组件自身在模板中注册的事件，只有在渲染的时候才会根据虚拟DOM的对比结果来确定是注册事件还是解绑事件。所以在实例初始化阶段，被初始化的事件指的是父组件在模板中使用v-on监听子组件内触发的事件。
（12）Vue.js通过initEvents函数执行初始化事件相关的逻辑。
 */

export function initEvents(vm) {
    vm._events = Object.create(null);
    // <!-- 初始化父组件附加的事件 -->
    const listeners = vm.$options._parentListeners;
    if (listeners) {
        updateComponentListeners(vm, listeners);
    }
}

// 1、在vm上新增_events属性并将它初始化为空对象，用来存储事件。事实上，所有使用vm.$on注册的事件监听器都会保存到vm._events属性中。
// 2、在模板编译阶段，当模板解析到组件标签时，会实例化子组件，同时将标签上注册的事件解析成object并通过参数传递给子组件。
//   所以当子组件被实例化时，可以在参数中获取父组件向自己注册的事件，这些事件最终会被保存在vm.$options._parentListeners中。

/*<button-counter v-on:increment="incrementTotal"></button-counter>
vm.$options._parentListeners：
{ increment :function(){}}
*/


/**
 * 3、如果vm.$options._parentListeners不为空，
 * 则调用updateComponentListeners方法，
 * 将父组件向子组件注册的事件注册到子组件实例中。
 */

// （13）updateComponentListeners逻辑

// 只需要循环vm.$options._parentListeners并使用vm.$on把事件都注册到this._events中即可。


let target;

function add(event, fn, once) {
    if (once) {
        target.$once(event, fn);
    } else {
        target.$on(event, fn);
    }
}

function remove(event, fn) {
    target.$off(event, fn);
}

export function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove, vm);
}

/*
1、封装了add和remove这两个函数，用来新增和删除事件。
2、updateListeners函数对比listeners和oldListeners的不同，并调用参数中提供的add和remove进行相应的注册事件和卸载事件的操作。
（14）updateListeners函数
1、实现思路：如果listeners对象中存在某个key（也就是事件名）在oldListeners中不存在，那么说明这个事件是需要新增的事件；
反过来，如果oldListeners中存在某些key（事件名）在listeners中不存在，那么说明这个事件是需要从事件系统中移除的。
 */

export function updateListeners(on, oldOn, add, remove, vm) {
    let name, cur, old, event;
    for (name in on) {
        cur = on[name];
        old = oldOn[name];
        event = normalizeEvent(name);
        if (isUndef(cur)) {
            process.env.NODE_ENV !== 'production' && warn(
                'Invaild handler for event "${event.name}":got' + String(cur),
                vm
            )
        } else if (isUndef(old)) {
            if (isUndef(cur.fns)) {
                cur = on[name] = createFnInvoker(cur);
            }
            add(event.name, cur, event.once, event.capture, event.passive);
        } else if (cur !== old) {
            old.fns = cur;
            on[name] = old;
        }
    }
    for (name in oldOn) {
        if (isUndef(on[name])) {
            event = normalizeEvent(name);
            remove(event.name, oldOn[name], event.capture);
        }
    }
}

/*2、该函数接收5个参数，分别是on、oldOn、add、remove和vm。
 3、其主要逻辑是比对on和oldOn来分辨哪些事件需要执行add注册事件，哪些事件需要执行remove删除事件。
 4、可以分为两部分呢，第一部分是循环on，第二部分是循环oldOn。第一部分的主要作用是判断哪些事件在oldOn中不存在，调用add注册这些事件。第二部分的作用是循环oldOn，判断哪些事件在on中不存在，调用remove移除这些事件。
 5、在循环on的过程中，有如下三个判断

 判断事件名对应的值是否是undefined或null，如果是，则在控制台触发警告。判断该事件名在oldOn中是否存在，如果不存在，则调用add注册事件。如果事件名在on和oldOn中都存在，但是它们并不相同，则将事件回调替换成on中的回调，并且把on中的回调引用指向真实的事件系统中注册的事件，也就是oldOn中对应的事件。

6、isUndef函数用于判断传入的参数是否为undefined或null。

15）normalizeEvent函数
1、Vue.js的模板中支持事件修饰符，例如capture、once和passive等，如果我们在模板中注册事件时使用了事件修饰符，那么在模板编译阶段解析标签上的属性时，会将这些修饰符改成对应的符号加载事件名的前面，例如
<child v-on:increment.once="a"></child>
复制代码
vm.$options._parentListeners为：
{~increment:function(){}}
复制代码
事件名的前面新增了一个~符号，说明该事件的事件修饰符是once，
通过这样的方式来分辨当前事件是否使用了事件修饰符。
2、normalizeEvent的作用是将事件修饰符解析出来。

3、如果事件有修饰符，则会将它截取出来。
最终输出的对象中保存了事件名以及一些事件修饰符，
这些修饰符为true说明事件使用了此事件修饰符。
*/


const normalizeEvent = name => {
    const passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    const once = name.charAt(0) === '~';
    name = once ? name.slice(1) : name;
    const capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
        name,
        once,
        capture,
        passive
    }
}


// 三、初始化属性方法
export function initRender(vm: Component) {
    vm._vnode = null
    vm._staticTrees = null
    const options = vm.$options
    const parentVnode = vm.$vnode = options._parentVnode node in parent tree
    const renderContext = parentVnode && parentVnode.context
    vm.$slots = resolveSlots(options._renderChildren, renderContext)
    vm.$scopedSlots = emptyObject

    vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)

    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

    const parentData = parentVnode && parentVnode.data

    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true)
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)

}

/*
可见，这也是给vue实例 初始化一些属性和方法，其中包括

_vnode：表示这个实例的节点_staticTrees：表示是否是静态节点
什么是静态节点我们在学习vue源码（8）手写优化器说过

$slots、$scopedSlots都属该组件的插槽_c与 $createElement都是用于创建VNode节点，
_c 我们在学习vue源码（9）手写代码生成器里用到。
createElement如果我们自己写render函数的话，就会用到。如图所示

然后又添加了$attrs、$listeners
*/

/**
 * 其中initLifecycle给实例初始化了这些属性
 * 
 * $parent 
$root
 
$children
$refs
 
_watcher
_isDestroyed
_isBeingDestroyed
 */

/**
 * initEvents 则是初始化了 写在子组件上的事件。其事件都保存在vm._events中
 */


/**
   * initRender 则是初始化了这些属性
   * _vnode
_staticTrees


`$slots`、`$scopedSlots`
_c与 $createElement

`$attrs`、`$listeners`
   */