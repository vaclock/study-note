const pro = new Promise((res => {
    res(1)
})).then(data => {
    return data
})

function isPromise(obj) {
    return !!(obj && typeof obj === 'object' && typeof obj.then === 'function');
}

function addMicroTask(task) {
    if (process && process.nextTick) {
        process.nextTick(task)
    } else if (MutationObserver) {
        const div = document.createElement('div')
        const observer = new MutationObserver(task)
        observer.observe(div, {
            childList: true
        })
        div.innerHTML = '11'
    } else {
        setTimeout(task, 0)
    }
}
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this._state = PENDING
        this._value = undefined
        this.handlers = []

        executor(this._resolve.bind(this), this._reject.bind(this))
    }

    _resolve(data) {
        this._changeState(FULFILLED, data)
    }

    _reject(reason) {
        this._changeState(REJECTED, reason)
    }

    _changeState(state, value) {
        if (this._state !== PENDING) {
            return
        }
        this._state = state
        this._value = value
        this._runHandler()
    }

    _runHandler() {
        if (this._state === PENDING) {
            // 目前任务仍在挂起
            return;
        }
        while(this.handlers[0]) {
            const {
                state, handler, resolve, reject
            } = this.handlers[0];
            addMicroTask(() => {
                if (state !== this._state) {
                    return
                }
                if (typeof handler !== 'function') {
                    return
                }
                try {
                    const result = handler(this._value)
                    if (isPromise(result)) {
                        result.then(resolve, reject)
                    } else {
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            })
            this.handlers.shift()
        }
    }

    then(onFulFilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.handlers.push({
                state: FULFILLED,
                handler: onFulFilled,
                resolve: resolve,
                reject: reject
            })
            this.handlers.push({
                state: REJECTED,
                handler: onRejected,
                resolve: resolve,
                reject: reject
            })
            this._runHandler()
        })
    }
}

const myPro = new MyPromise((res => {
    res(1)
})).then(function B(data) {
    console.log('B', data)
    return new MyPromise((res => {
        res(222)
    }))
}).then(function A(data) {
    console.log('A', data)
    return 1
})


// setTimeout(() => {
//     console.log(2)
// }, 0)
// process.nextTick(() => {
//     console.log(1)
// })