// 迭代器协议: 迭代器是一种特殊的对象，如果一个对象实现了next()方法
// 该方法返回包含两个属性的对象 {value: any, done: boolean}
const createIterator = (arr) => {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false
        }
      }
      return {
        value: undefined,
        done: true
      }
    },
    // 迭代器本身 遵循 可迭代协议 迭代器本身是可迭代的
    [Symbol.iterator]() {
      return this;
    }
  }
}

const iterator = createIterator([1, 2, 3, 4])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


// 实现了迭代器协议的对象，可以被for item of 遍历 for of中会调用[Symbol.iterator]方法
// item 是迭代器返回的value, 如果done为true 迭代结束

// 可迭代协议:
const IteratorObj = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index
  }
}