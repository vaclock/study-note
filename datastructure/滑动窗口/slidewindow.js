// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

// let nums = 
// nums = [1,12,-5,-6,50,3], k = 4
// 输出：12.75

let nums = [1,12,-5,-6,50,3], k = 4;
const sumArr = (nums) => {
  return nums.reduce((calc, cur) => calc + cur, 0)
}
// function findTarget(nums, k) {
//   let ans = -Infinity
//   for (let left = 0; left <= nums.length - 1; left++) {
//     // left 是当前窗口的右边界
//     // 满足长度等于k长度的起始点是left - k + 1(1是索引0的元素)
//     const startIndex = left - k + 1;
//     // 如果等于0，代表左侧已经有第一个了
//     if (startIndex < 0) continue;
//     ans = Math.max(ans, sumArr(nums.slice(startIndex, left + 1)) / k)
//   }
//   return ans
// }


// 当然，滑动窗口没有这么脑残，还有可以优化的地方，就是sum，不用每次无脑算，
// 提前加好，然后减去左侧在窗口外的，然后加上右侧马上要进窗口的
function findTarget(nums, k) {
  let ans = -Infinity
  let sum = 0
  for (let left = 0; left <= nums.length - 1; left++) {
    sum += nums[left]
    // left 是当前窗口的右边界
    // 满足长度等于k长度的起始点是left - k + 1(1是索引0的元素)
    const startIndex = left - k + 1;
    // 如果等于0，代表左侧已经有第一个了
    if (startIndex < 0) continue;
    ans = Math.max(ans, sum  / k)
    sum -= nums[startIndex]
  }
  return ans
}
console.log(findTarget(nums, k))
