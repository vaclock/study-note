let obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: [4, 5]
        }
    },
    arr: [6, 7]
}

let res = {}
function dfs(obj, path) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                // 数组
                obj[key].forEach((item, index) => {
                    dfs(item, `${path ? `${path}.` : ''}${key}[${index}]`)
                })
            } else {
                // 对象
                dfs(obj[key], `${path ? `${path}.` : ''}${key}`)
            }
        } else {
            res[`${path ? `${path}.` : ''}${key}`] = obj[key]
        }
    }
    if (typeof obj !== 'object' && path) {
        res[path] = obj
    }
}
dfs(obj)
console.log(res)