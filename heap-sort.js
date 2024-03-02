
//first we want to convert to heapify 



function heapify(array, length, parentIndex) {

    let largest = parentIndex
    let left = parentIndex * 2 + 1
    let right = parentIndex * 2 + 2
    if (left < length && array[left] > array[largest]) {
        largest = left

    }
    if (right < length && array[right] > array[largest]) {
        largest = right
    }

    if (largest !== parentIndex) {
        [array[parentIndex], array[largest]] = [array[largest], array[parentIndex]]
        heapify(array, length, largest)

    }

    return array
}



function heapSort(array) {

let length=array.length
let lastParentNode=Math.floor(length/2-1);
let lastChild=length-1

while(lastParentNode>=0){

    heapify(array,length,lastParentNode);
    lastParentNode--
}

while(lastChild>=0){

    [array[0] ,array[lastChild]]=[array[lastChild],array[0]]
    heapify(array,lastChild,0);
    lastChild--
}
return array;

}

console.log(heapSort([3, 2, 5, 5, 6, 4, 3, 2,34,6,53,2,6]));