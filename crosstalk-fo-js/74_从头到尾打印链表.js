function printListFromHead(head){
    const stack = [];
    let node = head;
    while(node){
        stack.push(node.val);
        node = node.next;
    }
    return stack.reverse()
}

//我不知道为什么要写这个代码，因为渴吗？哈哈，我该怎么办，想不通。