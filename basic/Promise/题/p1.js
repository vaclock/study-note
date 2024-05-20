new Promise((res, rej) => {
    rej(1)
})
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err, '111')
})
.then(res => {
    console.log(res)
})

