function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
exports.insertsort = function insertsort(arr) {
    for(let i = 1; i < arr.length; ++i) {
        let preIndex = i - 1
        const curVal = arr[i]
        while(preIndex >= 0 && curVal < arr[preIndex]) {
            // 前一位比当前位小 将前一位复制给当前位
            swap(arr, preIndex, preIndex + 1)
            preIndex--
        }
    }
    return arr
}
// let arr = [9, 13, 5, 1, 299, -1]
// console.log(insertsort(arr))