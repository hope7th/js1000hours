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
}

function printNode(value) {
  console.log(value)
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

var tree = new BinarySearchTree();
tree.insert(11);tree.insert(7);
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
console.info(tree)
tree.inOrderTraverse(printNode)