new Promise((res, rej) => {
    throw new Error(1)
})
.then(res => {
    console.log(res)
    throw new Error(2)
})
.catch(err => {
    throw err
})
.then(res => {
    console.log(res)
})

