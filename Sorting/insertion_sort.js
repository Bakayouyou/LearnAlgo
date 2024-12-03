array = [2,5,6,8,1,3,5,7,1,7,4,5,2]

function insertionSort(array) {
    n = array.length
for (let i = 1; i < n; i++) {
    element = array[i];
    gapToDecrease = i

    while (gapToDecrease > 0 && array[gapToDecrease - 1] > element) {
        array[gapToDecrease] = array[gapToDecrease - 1]
        gapToDecrease -= 1    
    }
    array[gapToDecrease] = element
}
return array
}

console.log(insertionSort(array))