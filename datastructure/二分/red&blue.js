// 目标：正序，找出比target大的第一个数，或者>= target的第一个数
let nums = [1, 1, 2, 3, 4, 4, 9]

// 找到第一个target，也就是 >= target
const findTarget = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // 循环不变量
    // nums[left] < target
    // nums[right] >= target
    const mid = left + ((right - left) >> 1)
    // 不断的染色，把右边的符合要求区域染成蓝色
    if (nums[mid] >= target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
// 找到第一个大于 target
// const findTarget = (nums, target) => {
//   let left = 0
//   let right = nums.length - 1
//   while (left <= right) {
//     const mid = left + ((right - left) >> 1)
//     // 循环不变量
//     // nums[left] <= target
//     // nums[right] > target
//     if (nums[mid] > target) {
//       right = mid - 1
//     } else {
//       left = mid + 1
//     }
//   }
//   return left
// }
// // 找到第一个小于等于target的数
// const findTarget = (nums, target) => {
//   let left = 0
//   let right = nums.length - 1
//   while (left <= right) {
//     const mid = left + ((right - left) >> 1)
//     // 循环不变量
//     // nums[left] <= target
//     // nums[right] > target
//     if (nums[mid] <= target) {
//       // 左侧才是符合区域的蓝色区域
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }
//   return right
// }
// // 找到第一个小于target的数
// const findTarget = (nums, target) => {
//   let left = 0
//   let right = nums.length - 1
//   while (left <= right) {
//     const mid = left + ((right - left) >> 1)
//     // 循环不变量
//     // nums[left] <= target
//     // nums[right] > target
//     if (nums[mid] < target) {
//       // 左侧才是符合区域的蓝色区域
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }
//   return right
// }
findTarget(nums, 4)