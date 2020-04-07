function BinarySearchTree () {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var root = null;
  this.insert = function (key) {
    var newNode = new Node(key);
    if (root ===  null){
      root = newNode;
    } else {
      insertNode(root,newNode)
    }
  };
  // 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访
  // 问所有节点。
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root,callback)
  };
  //先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root,callback)
  }
  //后序遍历
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root,callback)
  }
  //搜索最小值
  this.min = function () {
    return minNode(root)
  }
  //搜索最大值
  this.max = function () {
    return maxNode(root)
  }
  //搜索特定值
  this.search = function (key) {
    return searchNode(root,key)
  }
  //移除一个节点
  this.remove = function (key) {
    root =  removeNode(root,key)
  }
}

var removeNode = function (node,key) {
  console.log(key)
  if (node===null){
    return null;
  }
  if (key<node.key){
    node.left = removeNode(node.left,key)
    console.log("ssd")
    return node;
  } else if (key>node.key){
    node.right = removeNode(node.right,key)
    return node;
  }else {
    console.log("ss")
    if (node.left===null&&node.right===null){
      node = null;
      return node
    }

    if (node.left===null){
      node = node.right
      return node
    } else if (node.right===null){
      node =  node.left;
      return node;
    }

    //两个节点
    var aux = findMinNode(node.right)
    node.key = aux.key;
    node.right = removeNode(node.right,aux.key);
    return node;
  }
}

var findMinNode = function (node) {
  while (node&&node.left!==null){
    node = node.left
  }
  return node;
}
var searchNode = function (node,key) {
  if (node===null){
    return false
  }
  if (key<node.key){
    return searchNode(node.left,key)
  }else if(key>node.key){
    return searchNode(node.right,key)
  }else {
    return true;
  }
};
function printNode(value) {
  console.log(value)
}

var minNode = function (node) {
  if (node){
    while (node&&node.left!==null){
      node = node.left
    }
    return node.key
  }
  return null
}

var maxNode = function (node) {
  if (node){
    while (node&&node.right!==null){
      node = node.right
    }
    return node.key
  }
  return null
}

var preOrderTraverseNode =  function (node,callback) {
  if (node!==null){
    callback(node.key)
    preOrderTraverseNode(node.left,callback);
    preOrderTraverseNode(node.right,callback)
  }
}
var postOrderTraverseNode =  function (node,callback) {
  if (node!==null){
    postOrderTraverseNode(node.left,callback);
    postOrderTraverseNode(node.right,callback);
    callback(node.key)
  }
}

var inOrderTraverseNode =  function (node,callback) {
  if (node!==null){
    inOrderTraverseNode(node.left,callback);
    callback(node.key)
    inOrderTraverseNode(node.right,callback)
  }
}

var insertNode = function (node,newNode) {
  if (newNode.key<node.key){
    if (node.left===null){
      node.left = newNode;
    } else {
      insertNode(node.left,newNode)
    }
  } else {
    if (node.right === null){
      node.right = newNode
    } else {
      insertNode(node.right,newNode)
    }
  }
}

//平衡树

var heightNode = function(node){
  if(node==null){
    return -1;
  }else {
    return Math.max(heightNode(node.left),heightNode(node.right))+1;
  }
}
var rotationRR = function(node){
  var tmp = node.right;
  node.right = tmp.left;
  tmp.left = node;
  return tmp;
}
var rotationLL = function(node){
  var tmp = node.left;
  node.left = tmp.right;
  tmp.right = node;
  return tmp
}
var insertAVLNode = function(node,element){
  if(node===null){
    node = new Node(element)
  }else if(element<node.key){
    node.left = insertAVLNode(node.left,element)
    if(node.left!==null){

    }
  }else if(element>node.key){
    node.right = insertAVLNode(node.right,element);
    if(node.right!==null){

    }
  }
}




var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.info(tree)
console.log("中序遍历")
tree.inOrderTraverse(printNode)
console.log("先序遍历")
tree.preOrderTraverse(printNode)
console.log("后序遍历")
tree.postOrderTraverse(printNode)
console.log("最小值")
console.log(tree.min())
console.log("最大值")
console.log(tree.max())
console.log("搜索特定值")
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');
console.log("移除节点")
console.log(tree.remove(9))
tree.inOrderTraverse(printNode)

