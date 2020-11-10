function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

function mergeSort(array){
    let half = array.length/2;
    if(array.length<2){
        return array;
    }
    let left = array.splice(0,half);
    return merge(mergeSort(left),mergeSort(array))
}

var tmpArray = [4,6,5,2,1,8,7,3];
console.log(mergeSort(tmpArray));