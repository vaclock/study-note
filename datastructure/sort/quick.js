function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function partition(arr, left, right) {
  let i = left
  let j = i
  for (j; j < right; j++) {
    if (arr[j] < arr[right]) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}

/**
 * [2, 1, 4, 8, 3, 7]
 * []
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function quickSort(arr, left, right) {
  if (left < right) {
    const mid = partition(arr, left, right)
    quickSort(arr, left, mid - 1)
    quickSort(arr, mid + 1, right)
  }
  return arr
}


const arr = [2, 1, 4, 8, 3, 7]
console.log(quickSort(arr, 0, arr.length - 1))