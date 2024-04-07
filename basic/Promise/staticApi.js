// Promise.all(arg) arg可以传迭代器 通常是数组
// 返回值是一个Promise 必须arg全部成功 才返回成功 只要有一个pro失败 则立马返回异常

/**
 * 得到一个新的Promise 状态取决于参数iter中的所有prom状态 并且顺序是按照数组的顺序
 * @param {*} iter
 * @return Promise
 */
Promise.all = function(iter) {
    return new Promise((res, rej) => {
        try {
            let result = []
            if (iter.length === 0) {
                res(result)
            }
            let count = 0
            let fulFilledCount = 0
            for (const pro of iter) {
                let index = count
                count++
                Promise.resolve(pro).then(data => {
                    fulFilledCount++
                    result[index] = data
                    if (fulFilledCount === count) {
                        res(result)
                    }
                }).catch(err => {
                    rej(err)
                })
            }
        } catch (error) {
            rej(error)
        }
    })
}

Promise.all([
    1,
    2,
    3,
    new Promise((res) => {
        setTimeout(() => {
            res(22)
        }, 10)
    }),
    // Promise.resolve(2),
    // Promise.resolve(3)
]).then(data => {
    // console.log(data)
})

Promise.allSettled = function(iter) {
    return new Promise((resolve, reject) => {
        try {
            let result = []
            let count = 0
            let fulfilledCount = 0
            for(const pro of iter) {
                const index = count
                count++
                // console.log(pro)
                // 注意此处pro可能不是promise
                Promise.resolve(pro).then((data => {
                    fulfilledCount++
                    result[index] = {
                        status: 'fulfilled',
                        reason: data
                    }
                    if (fulfilledCount === count) {
                        resolve(result)
                    }
                }), (err => {
                    fulfilledCount++
                    result[index] = {
                        status: 'reject',
                        reason: err
                    }
                    if (fulfilledCount === count) {
                        resolve(result)
                    }
                }))
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

Promise.allSettled([
    1,
    2,
    3,
    new Promise((res, rej) => {
        setTimeout(() => {
            rej(22)
        }, 10)
    }),
    // Promise.resolve(2),
    // Promise.resolve(3)
]).then(data => {
    // console.log(data)
})

Promise.race = function(iter) {
    return new Promise((resolve, reject) => {
        for(const pro of iter) {
            Promise.resolve(pro).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        }
    })
}

Promise.race([
    new Promise((res, rej) => {
        setTimeout(() => {
            rej(22)
        }, 10)
    }),
    1,
    2,
    3,
]).then(data => {
    console.log(data)
})
