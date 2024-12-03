
function bubbleSort(array) {
    length = array.length

    for (i=0 ; i < length -1 ; i++) {
        isSorted = true
            for (j=0 ; j < length - i-1; j++) {
                if(array[j] > array[j +1]) {
                    let tempVar = array[j]
                    array[j] = array[j+1]
                    array[j+1] = tempVar
                    // const tempVar = array[j + 1]; // Stocke la valeur à l'indice j + 1
                    // array.splice(j + 1, 1, array[j]); // Remplace l'élément à j + 1 par l'élément à j
                    // array.splice(j, 1, tempVar); // Remplace l'élément à j par la valeur stockée
                    isSorted = false
                }
            }
            if (isSorted) {
                break
            }
    }
    return array;
}
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

function jsSort(array) {
    array.sort((a, b) => a - b);
}

const arraySize = 1000;
const randomArray = generateRandomArray(arraySize);

console.time('Bubble Sort');
bubbleSort([...randomArray]);
console.timeEnd('Bubble Sort');

console.time('Js Sort');
jsSort([...randomArray]);
console.timeEnd('Js Sort');