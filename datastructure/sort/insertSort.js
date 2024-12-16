// 每一个和前面所有的数据比较，如果一直小/大就不断交换(有点类似冒泡排序)
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function insetSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1
    let curVal = arr[i]

    // 一定要把curVal保存到临时变量，因为swap会改变arr
    while(preIndex >= 0 && arr[preIndex] > curVal) {
      swap(arr, preIndex + 1, preIndex)
      preIndex--
    }
  }
  return arr
}

const arr = [2, 1, 4, 8, 3, 7]
console.log(insetSort(arr))