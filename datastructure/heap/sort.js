function heapSort(arr) {
  let len = arr.length

  for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
    heapfiy(arr, i, len)
  }
  for (let i = len - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapfiy(arr, 0, i)
      }
  return arr
}
function heapfiy(arr, cur, size) {
  let max = cur
  const left = 2 * cur + 1
  const right = 2 * cur + 2
  if (left < size && arr[left] > arr[max]) {
    max = left
  }

  if (right < size && arr[right] > arr[max]) {
    max = right
  }

  if (max !== cur) {
    [arr[cur], arr[max]] = [arr[max], arr[cur]]
    heapfiy(arr, max, size)
  }
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Sorted array is", heapSort(arr));
// [ 13, 11, 12, 5, 6, 7 ]
/**
      13
    11  12
  5  6  7
 */

  // [ 7, 11, 12, 5, 6, 13 ]

//   [ 13, 11, 12, 5, 6, 7 ]
//       13
//   11     12
// 5 6     7