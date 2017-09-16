function swap(arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubbleSort(array) {
    let sortArray = array;
    let swapCounter = 0;
    if(sortArray.length < 2){
        return sortArray;
    } else{
        for(let i = 0; i < sortArray.length - 1; i++){
            if(sortArray[i] > sortArray[i+1]){
                swap(sortArray, i, i+1);
                swapCounter++;
            }
        }
        return bubbleSort(sortArray.slice(0,-1)).concat(sortArray[sortArray.length -1]);
    }        
}