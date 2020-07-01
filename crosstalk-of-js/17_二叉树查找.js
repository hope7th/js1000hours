//一个父 节点的两个子节点分别称为左节点和右节点
//二叉树每个节点的子节点不允许超过两个
//二叉查找树(BST)是一种 特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。

function Node(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data,null,null);
    if (this.root == null){
        this.root = n;
    }else {
        var current = this.root;
        var parent;
        while (true){
            parent = current;
            if (data < current.data){
                current = current.left;
                if (current==null){
                    parent.left = n;
                    break
                }
            } else {
                current = current.right;
                if (current==null){
                    parent.right = n;
                    break
                }
            }
        }
    }
}