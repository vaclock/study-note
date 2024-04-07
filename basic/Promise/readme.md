[toc]
# Promise出现的原因

## 链式处理
.then返回的是一个Promise 需要继续调用.then或者.catch才能获取到内容
- catch处理
```js
// 两种写法一致 then也可以接受异常处理方法 也可以直接.继续操作
// 写法1
promise1.then(data => {})
.catch(err => {})

// 写法2
promise1.then(data => {}, err => {})
```
- 链式调用
1. then方法必定会返回一个Promise 可理解为后续处理也是一个任务
2. 新任务的状态取决于**后续处理(没报错看有没有then, 有报错看有没有catch)**
   1. 若没有后续处理 **新任务的状态与前任务状态一致 数据为前任务数据一致**
   2. 若有后续处理但还未执行(也就是代码里的pro1和pro3 未被微队列消费之前) 新任务挂起(也就是pro2和pro4)
   3. 如果后续处理执行了 则根据后续处理的情况决定新任务的状态
      1. **后续处理无错 新任务的状态为完成 数据为后续处理的返回值**
      2. 后续处理报错 新任务的状态为reject 数据为异常对象
      3. 后续处理返回值是一个Promise 则新任务的状态和数据 与这个返回的Promise完全一致
```js
// pro2没有对pro1的resolve进行.then 也就是没有后续处理 所以pro2的数据和状态和pro1相同
const pro1 = new Promise((res, rej) => {
    console.log('pro1')
    res(123)
})

const pro2 = pro.catch(rej => {
    console.log('pro')
})
setTimeout(() => {
    // {status: fulfilled, value: 123}
    console.log(pro2)
}, 1000)

// pro4没有对pro3的reject进行.catch 也就是没有后续处理 所以pro4的数据和状态和pro3相同
const pro3 = new Promise((res, rej) => {
    console.log('pro1')
    rej(123)
})
const pro4 = pro3.then(res => {
    console.lgo('pro4')
})
setTimeout(() => {
    // {status: 'reject', value: 123}
    console.log(pro4)
}, 1000)
```

### 面试题
```js
const pro1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 1000)
})
const pro2 = pro1.then(data => {
    console.log(data)
    return data + 1
})
const pro3 = pro2.then(data => {
    console.log(data)
})
console.log(pro1, pro2, pro3)

setTimeout(() => {
    console.log(pro1, pro2, pro3)
}, 2000)

/**
 * {status: pending val: undefined}, {status: pending val: undefined}, {status: pending val: undefined}
 *
 * {status: fulfilled val: 1} 1  2 {status: fulfilled val: 2} {status: fulfilled val: undefined}
 */
```


```js
const pro1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
    }, 1000)
})
const pro2 = pro1.catch(data => {
    console.log(data)
    return data + 1
})
const pro3 = pro2.then(data => {
    console.log(data)
})
console.log(pro1, pro2, pro3)

setTimeout(() => {
    console.log(pro1, pro2, pro3)
}, 2000)

/**
 * {status: pending val: undefined}, {status: pending val: undefined}, {status: pending val: undefined}
 * {status: fulfilled val: 1} {status: fulfilled val: 1} {status: pending val: undefined}
 */
```

## 静态方法
```ts
- resolve( ): Promise.resolve(1) => new Promise((res) => res(1))
- reject( ): Promise.reject(1) => new Promise((res, rej) => rej(1))
- all(iterator: Promise)
- allSettled(iterator: Promise)
- race(iterator: Promise): // 返回执行完的第一个Promise(并不一定是iterator的第一个)
- any(iterator: Promise): //只要其中有一个成功返回值即成功
```

# Promise A+ 规范
https://promisesaplus.com/


# async await

