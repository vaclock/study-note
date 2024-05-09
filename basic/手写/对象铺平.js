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
    if (typeof obj === 'object' && obj !== null) {
        for (let key in obj) {
            if (Array.isArray(obj)) {
                let newPath = path ? `${path}[${key}]` : key
                dfs(obj[key], newPath)
            } else {
                let newPath = path ? `${path}.${key}` : key
                dfs(obj[key], newPath)
            }
        }
    } else {
        res[path] = obj
    }
}
dfs(obj)
console.log(res)