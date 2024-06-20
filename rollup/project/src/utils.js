/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
export function getRandom(min, max) {
    return Math.random() * (max - min) + min
}

export function deepCopy(obj) {
    if (typeof obj !== 'object' || !obj) {
        return obj
    }
    let result = Array.isArray(obj) ? [] : {}
    for (let prop in obj) {
        result[prop] = deepCopy(obj[prop])
    }
    return result
}

export default {
    getRandom,
    deepCopy
}