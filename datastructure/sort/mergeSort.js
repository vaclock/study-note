// 归并排序
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 *
 * 有点像lc 合并有序链表
 * [2, 1, 4, 8, 3, 7]
 * [2, 1, 4] [8, 3, 7]
 * [2, 1] [4] [8, 3] [7]
 * [2] [1] [4] [8][3] [7]
 * [1, 2] [4] [3, 8] [7]
 * [1, 2, 4] [3, 7, 8]
 * [1, 2, 3, 4, 7, 8]
 * @param {*} arr 
 */

function merge(arr,tempArr,  left, mid, right) {
  let l_pos = left
  let r_pos = mid + 1
  let pos = left
  while(l_pos <= mid && r_pos <= right) {
    if (arr[l_pos] > arr[r_pos]) {
      tempArr[pos] = arr[r_pos]
      r_pos++
      pos++
    } else {
      tempArr[pos] = arr[l_pos]
      pos++
      l_pos++
    }
  }
  while (l_pos <= mid) {
    tempArr[pos] = arr[l_pos]
    pos++
    l_pos++
  }
  while (r_pos <= right) {
    tempArr[pos] = arr[r_pos]
    pos++
    r_pos++
  }
  while(left <= right) {
    arr[left] = tempArr[left]
    left++
  }
}

function mergeSort(arr, tempArr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2)
    mergeSort(arr, tempArr, left, mid)
    mergeSort(arr, tempArr, mid + 1, right)
    merge(arr, tempArr, left, mid, right)
  }
  return arr
}


const arr = [2, 1, 4, 8, 3, 7]
console.log(mergeSort(arr, [...arr], 0, arr.length - 1))