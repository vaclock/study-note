// 每一次循环中嵌套一层循环，嵌套循环找出最大/小的一个数，并且把这个最大/小的数和外面循环的索引进行交换
// 也有点类似冒泡排序，但是冒泡多了很多的交换
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * [4, 1, 2, 8, 3, 7]
 * max    j
 * @param {*} arr 
 * @returns 
 */
// 每次循环都选出一个数最大，把最大的放到开始循环的地方
function selectSort(arr) {
  let min = 0
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // 证明j比min小 交换后j就在min的位置了
        // 要注意 j - len这段中最小的已经放到i的位置了
        swap(arr, min, j)
      }
    }
  }
  return arr
}

const arr = [2, 1, 4, 8, 3, 7, -12, 100]
console.log(selectSort(arr))