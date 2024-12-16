// 分治---基准---划分区间
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
/**
 * 
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function partition(arr, left, right) {
  // [24, 12, 10, 1, 41, 100]
  // i    j                r
  let i = left
  for (let j = i; j < right; j++) {
    if (arr[j] < arr[right]) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}
function quickSort(arr, left, right) {
  if (left < right) {
    const mid  = partition(arr, left, right);
    quickSort(arr, left, mid - 1);
    quickSort(arr, mid + 1, right);
  }
  return arr
}

const arr = [24, 12, 10, 1, 41, 100]
const res = quickSort(arr, 0, arr.length - 1)

console.log(res)