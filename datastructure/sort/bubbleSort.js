function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * [2, 1, 4, 8, 3, 7]
 * [1, 2, 4, 3, 7, 8]
 * 
 * 
 * @param {*} arr 
 */
function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j + 1, j)
      }
    }
  }
  return arr
}
const arr = [2, 1, 4, 8, 3, 7]
console.log(bubleSort(arr))