//调整函数
function headAdjust(elements, pos, len){
  //将当前节点值进行保存
  var swap = elements[pos];

  //定位到当前节点的左边的子节点
  var child = pos * 2 + 1;

  //递归，直至没有子节点为止
  while(child < len){
    //如果当前节点有右边的子节点，并且右子节点较大的场合，采用右子节点和当前节点进行比较
    if(child + 1 < len && elements[child] < elements[child + 1]){
      child += 1;
    }

    //比较当前节点和最大的子节点，小于则进行值交换，交换后将当前节点定位于子节点上
    if(elements[pos] < elements[child]){
      elements[pos] = elements[child];
      pos = child;
      child = pos * 2 + 1;
    }
    else{
      break;
    }

    elements[pos] = swap;
  }
}

//构建堆
function buildHeap(elements){
  //从最后一个拥有子节点的节点开始，将该节点连同其子节点进行比较，
  //将最大的数交换与该节点,交换后，再依次向前节点进行相同交换处理，
  //直至构建出大顶堆（升序为大顶，降序为小顶）
  for(var i=elements.length/2; i>=0; i--){
    headAdjust(elements, i, elements.length);
  }
}

function sort(elements){
  //构建堆
  buildHeap(elements);

  //从数列的尾部开始进行调整
  for(var i=elements.length-1; i>0; i--){
    //堆顶永远是最大元素，故，将堆顶和尾部元素交换，将最大元素保存于尾部，并且不参与后面的调整
    var swap = elements[i];
    elements[i] = elements[0];
    elements[0] = swap;

    //进行调整，将最大）元素调整至堆顶
    headAdjust(elements, 0, i);
  }
}

var elements = [3, 1, 5, 7, 2, 4, 9, 6, 10, 8];
console.log(elements)
buildHeap(elements);
console.log("大顶堆："+elements)
console.log('before: ' + elements);
sort(elements);
console.log(' after: ' + elements);
