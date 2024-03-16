// const pro1 = new Promise((resolve, reject) => {
//     console.log('pro1')
//     // reject(111)
//     resolve(123)
// })
// const pro2 = pro1.then(data => {
//     console.log('pro2')
//     return new Promise((res, rej) => {
//         // res(11111)
//     })
// })

// setTimeout(() => {
//     console.log(pro2)
// })

const pro1 = new Promise((res, rej) => {
    // setTimeout(() => {
    //    res()
    // }, 1000)
    throw 3
})
const pro2 = pro1.catch(data => {
    console.log(data)
    return data + 1
})
const pro3 = pro2.then(data => {
    console.log(data)
})
console.log(pro1, pro2, pro3)
// console.log(pro1, pro2)

setTimeout(() => {
    console.log(pro1, pro2, pro3)
    // console.log(pro1, pro2)
}, 2000)

/**
 * {status: pending val: undefined}, {status: pending val: undefined}, {status: pending val: undefined}
 * {status: fulfilled val: 1} {status: fulfilled val: 1} {status: fulfilled val: undefined}
 */


/**
 * {rejected error1 }
 * {rejected error1 }
 * {rejected error1 }
 * {rejected error1 }
 *
 */