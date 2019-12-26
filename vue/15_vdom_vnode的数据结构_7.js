// Virtual DOM 是用 VNode 这么一个 Class 去描述，它是定义在 src/core/vdom/vnode.js 中的。

export default class VNode {
    tag: string | void;
    data: VNodeData | void;
    children: ?Array<VNode>;
    text: string | void;
    elm: Node | void;
    ns: string | void;
    context: Component | void; // rendered in this component's scope
    key: string | number | void;
    componentOptions: VNodeComponentOptions | void;
    componentInstance: Component | void; // component instance
    parent: VNode | void; // component placeholder node
  
    // strictly internal
    raw: boolean; // contains raw HTML? (server only)
    isStatic: boolean; // hoisted static node
    isRootInsert: boolean; // necessary for enter transition check
    isComment: boolean; // empty comment placeholder?
    isCloned: boolean; // is a cloned node?
    isOnce: boolean; // is a v-once node?
    asyncFactory: Function | void; // async component factory function
    asyncMeta: Object | void;
    isAsyncPlaceholder: boolean;
    ssrContext: Object | void;
    fnContext: Component | void; // real context vm for functional nodes
    fnOptions: ?ComponentOptions; // for SSR caching
    fnScopeId: ?string; // functional scope id support
  
    constructor (
      tag?: string,
      data?: VNodeData,
      children?: ?Array<VNode>,
      text?: string,
      elm?: Node,
      context?: Component,
      componentOptions?: VNodeComponentOptions,
      asyncFactory?: Function
    ) {
      this.tag = tag
      this.data = data
      this.children = children
      this.text = text
      this.elm = elm
      this.ns = undefined
      this.context = context
      this.fnContext = undefined
      this.fnOptions = undefined
      this.fnScopeId = undefined
      this.key = data && data.key
      this.componentOptions = componentOptions
      this.componentInstance = undefined
      this.parent = undefined
      this.raw = false
      this.isStatic = false
      this.isRootInsert = true
      this.isComment = false
      this.isCloned = false
      this.isOnce = false
      this.asyncFactory = asyncFactory
      this.asyncMeta = undefined
      this.isAsyncPlaceholder = false
    }
  
    // DEPRECATED: alias for componentInstance for backwards compat.
    /* istanbul ignore next */
    get child (): Component | void {
      return this.componentInstance
    }
  }

// 真正的 DOM 元素是非常庞大的，因为浏览器的标准就把 DOM 设计的非常复杂。当我们频繁的去做 DOM 更新，会产生一定的性能问题
// 而 Virtual DOM 就是用一个原生的 JS 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多。
// Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程。

// create diff patch...分别是什么方法呢。

