## 新语法

最早期Promise只是一个社区的A+规范 并不是官方推出的新语法

官方支持了Promise之后 ES7新增了async和await 使得回调可以更加的优雅
```js
new Promise((res, rej) => {
    res(1)
})
    .then(data => {
        // 操作1
        return data
    })
    .then(data => {
        // 操作2
        return data
    })

```

- 使用了async关键字的函数 该函数返回值一定是Promise 函数返回值表示Promise完成之后的数据
- async的执行是同步的 但是async函数 中遇到await时 需要等待 也就是相当于async关键字的作用只是把这个函数值用Promise包装之后返回 并不妨碍这个函数本身的执行

- await 必须出现在async函数中 用于等待async返回的Promise完成之后的数据 await也可以等待其他结果
```js
async function () {
    await 1
}
```
