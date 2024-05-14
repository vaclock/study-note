function curry(fn, ...args) {
    console.log(args)
    if (fn.length <= args.length) {
        return fn(...args)
    }
    return (...args2) => {
        return curry(fn, ...args, ...args2)
    }
}

function count(a, b, c) {
    return a + b + c
}
console.log(count(1, 2, 3), count.length)

const countCurry = curry(count)
console.log(countCurry(1)(2)());