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

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// 可迭代协议：实现了迭代器协议的对象，可以被for item of 遍历 for of中会调用[Symbol.iterator]方法
// item 是迭代器返回的value, 如果done为true 迭代结束

// 可迭代协议:
const IteratorObj = {
  a: 1,
  b: [12, 3],
  c: function() { console.log('aa'); },
  [Symbol.iterator]: function* () {
    for (const key of Object.keys(this)) {
      yield this[key]
    }
  }
}

// for (const item of IteratorObj) {
//   console.log(item)
// }

// 实现一个无限斐波那契数列的生成器
function* fibonacci() {
  let a = 0, b = 1
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

const fib = fibonacci()
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)

