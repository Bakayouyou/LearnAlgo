array = [2,5,6,8,1,3,5,7,1,7,4,5,2]

function selectionSort(array) {
    n = array.length

    for(i=0 ; i < n -1 ; i++) {
        minV = i
        for (let j = i + 1; j < n ; j++) {
            if (array[j] < array[minV]) {
                minV = j
            }  
        }
        let temp = array[i]; 
        array[i] = array[minV];
        array[minV] = temp;
    }
    return array
}

console.time('selection sort')
console.log(selectionSort(array))
console.timeEnd('selection sort')