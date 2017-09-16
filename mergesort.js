function mergeSort(array){
    if (array.length < 2){
        return array;
    } 
    var splits = split(array),
        left = splits[0],
        right = splits[1];
    return merge(mergeSort(left), mergeSort(right));
}
function split(wholeArray){
    let midPoint = Math.floor(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, midPoint);
    let secondHalf = wholeArray.slice(midPoint)
    return [firstHalf, secondHalf];
}
function merge(arr1, arr2){
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < arr1.length && rightIndex < arr2.length){
        if(arr1[leftIndex] < arr2[rightIndex]){
            mergedArr.push(arr1[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(arr2[rightIndex]);
            rightIndex++;
        }
    }
    return mergedArr.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex));
}