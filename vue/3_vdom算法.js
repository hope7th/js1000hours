

1 vdom意义
1-1 传统界面操作
(1)传统web界面操作中需要使用js操作DOM，
随着应用程序的复杂，dom操作复杂度提升。
为了有效的组织这种复杂操作，提出了mvc,mvvm等结果
(2)在mvvm中通过数据绑定可以实现视图与数据的互动效果
不需要手动更新页面。只需要在模板中声明视图组件和绑定数据。
双向绑定引擎vm可以自动实现数据与视图的同步更新

(3)mvvm只是简化了数据与视图的关系。为了简化模板引擎渲染，
可以使用vdom。生成新的视图替换旧的视图。

(4)vdom的核心是维护数据与视图的关系


2 vdom思路
1)原生dom包含属性较多。
直接操作dom可能导致页面重排，影响渲染性能
可以将dom解析为js对象，操作js对象则简单

;模板
<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
  <li class='item'>Item 3</li>
</ul>

;js对象
var element = {
  tagName: 'ul', // 节点标签名
  props: { // DOM的属性，用一个对象存储键值对
    id: 'list'
  },
  children: [ // 该节点的子节点
    {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 2"]},
    {tagName: 'li', props: {class: 'item'}, children: ["Item 3"]},
  ]
}

(2) 这样就可以将数据的变化直接修改js对象，
对比修改后js的对象，记录下需要对页面真正的dom操作。
然后将其应用到真正的dom树，实现页面的更新
视图的结构是整个全新渲染，最后操作dom只是修改局部

(3) 核心步骤如下

1 将dom树转换为js对象结构，生成真正dom树，插入到文档中
2 数据发生变化后，重新生成虚拟dom树，进行比较
3 将比较结果保存到dom树上
(4) 可以将js对象看做真实dom的缓存部分。

3 vdom之element

使用js对象记录dom节点，只需要记录节点类型，属性和子节点

;element.js

function Element (tagName, props, children) {
  this.tagName = tagName
  this.props = props
  this.children = children
}

module.exports = function (tagName, props, children) {
  return new Element(tagName, props, children)
}

element.js简单使用

var el = require('./element')

var ul = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item'}, ['Item 3'])
])

element的生成真正dom

Element.prototype.render = function () {
  var el = document.createElement(this.tagName) // 根据tagName构建
  var props = this.props

  for (var propName in props) { // 设置节点的DOM属性
    var propValue = props[propName]
    el.setAttribute(propName, propValue)
  }

  var children = this.children || []

  children.forEach(function (child) {
    var childEl = (child instanceof Element)
      ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
      : document.createTextNode(child) // 如果字符串，只构建文本节点
    el.appendChild(childEl)
  })

  return el
}

添加渲染结果到文档

var ulRoot = ul.render()
document.body.appendChild(ulRoot)


4 vdom之diff

对比两个树的diff是vdom算法的核心之一，
只是对同层的元素进行对比

对新旧两个树遍历，记录差异。

遍历节点把节点对比信息存储到对象


// diff 函数，对比两棵树
function diff (oldTree, newTree) {
  var index = 0 // 当前节点的标志
  var patches = {} // 用来记录每个节点差异的对象
  dfsWalk(oldTree, newTree, index, patches)
  return patches
}

// 对两棵树进行深度优先遍历
function dfsWalk (oldNode, newNode, index, patches) {
  // 对比oldNode和newNode的不同，记录下来
  patches[index] = [...]

  diffChildren(oldNode.children, newNode.children, index, patches)
}

// 遍历子节点
function diffChildren (oldChildren, newChildren, index, patches) {
  var leftNode = null
  var currentNodeIndex = index
  oldChildren.forEach(function (child, i) {
    var newChild = newChildren[i]
    currentNodeIndex = (leftNode && leftNode.count) // 计算节点的标识
      ? currentNodeIndex + leftNode.count + 1
      : currentNodeIndex + 1
    dfsWalk(child, newChild, currentNodeIndex, patches) // 深度遍历子节点
    leftNode = child
  })
}
上面的记录信息

patches[0] = [{difference}, {difference}, ...] // 用数组存储新旧节点的不同
同理p是patches[1]，ul是patches[3]，类推。


差异类型
对于节点的对比结果可能分为以下几种类型
替换掉原来的节点，
移动删除新增子节点
修改节点属性
修改节点文本

var REPLACE = 0
var REORDER = 1
var PROPS = 2
var TEXT = 3
差异类型举例


;替换差异
patches[0] = [{
  type: REPALCE,
  node: newNode // el('section', props, children)
}]

;属性修改
patches[0] = [{
  type: REPALCE,
  node: newNode // el('section', props, children)
}, {
  type: PROPS,
  props: {
    id: "container"
  }
}]

;文本修改
patches[2] = [{
  type: TEXT,
  content: "Virtual DOM2"
}]
子节点列表对比算法

;旧节点顺序
a b c d e f g h i
;新节点顺序
a b c h d f g h i j
列表中节点的操作可以看做移动 插入 删除三种
移动可以看出删除和插入的合并。因此，可以简化为插入和删除操作。
抽象出来就是字符串的最小编辑距离问题。
简单实现如下

patches[0] = [{
  type: REORDER,
  moves: [{remove or insert}, {remove or insert}, ...]
}]

5 vdom之patch

可以对js对象进行对比后结果patches对象中
转换为对应的dom操作实现dom树的更新

function patch (node, patches) {
  var walker = {index: 0}
  dfsWalk(node, walker, patches)
}

function dfsWalk (node, walker, patches) {
  var currentPatches = patches[walker.index] // 从patches拿出当前节点的差异

  var len = node.childNodes
    ? node.childNodes.length
    : 0
  for (var i = 0; i < len; i++) { // 深度遍历子节点
    var child = node.childNodes[i]
    walker.index++
    dfsWalk(child, walker, patches)
  }

  if (currentPatches) {
    applyPatches(node, currentPatches) // 对当前节点进行DOM操作
  }
}

function applyPatches (node, currentPatches) {
  currentPatches.forEach(function (currentPatch) {
    switch (currentPatch.type) {
      case REPLACE:
        node.parentNode.replaceChild(currentPatch.node.render(), node)
        break
      case REORDER:
        reorderChildren(node, currentPatch.moves)
        break
      case PROPS:
        setProps(node, currentPatch.props)
        break
      case TEXT:
        node.textContent = currentPatch.content
        break
      default:
        throw new Error('Unknown patch type ' + currentPatch.type)
    }
  })
}


// 6 总结
// vdom算法主要包含以上三个函数element,diff,patch
// 使用思路如下

// 1. 构建虚拟DOM
var tree = el('div', {'id': 'container'}, [
    el('h1', {style: 'color: blue'}, ['simple virtal dom']),
    el('p', ['Hello, virtual-dom']),
    el('ul', [el('li')])
])

// 2. 通过虚拟DOM构建真正的DOM
var root = tree.render()
document.body.appendChild(root)

// 3. 生成新的虚拟DOM
var newTree = el('div', {'id': 'container'}, [
    el('h1', {style: 'color: red'}, ['simple virtal dom']),
    el('p', ['Hello, virtual-dom']),
    el('ul', [el('li'), el('li')])
])

// 4. 比较两棵虚拟DOM树的不同
var patches = diff(tree, newTree)

// 5. 在真正的DOM元素上应用变更
patch(root, patches)



