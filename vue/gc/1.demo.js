
// 使用weakMap减少内存占用

const format = (bytes) => {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB'
}

global.gc()

const memc = process.memoryUsage()
console.log(format(memc.heapUsed()))

let map = new Map()
let key = new Array(1024 * 1024 * 5)
map.set(key, 1)
// map.delete(key)

global.gc()
const memc2 = process.memoryUsage()
console.log(format(memc2.heapUsed()))

// const map = new WeakMap()