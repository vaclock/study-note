function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function heapify(arr, len, i) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i
  if (left < len && arr[left] > arr[max]) max = left
  if (right < len && arr[right] > arr[max]) max = right

  if (max !== i) {
    swap(arr, i, max)
    heapify(arr, len, max)
  }
}


function heapSort(arr) {
  let len = arr.length
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i)
  }
  console.log(arr)
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, i, 0)
  }
  return arr
}
/**
 *          12
 *        /   \
 *       8    9
 *     / \    / \
 *    2   3  1   7
 */

const arr = [9, 2, 12, 8, 3, 1, 7]
// console.log(heapify(arr))
console.log(heapSort(arr))