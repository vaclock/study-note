class RequestLimiter {
    constructor(maxConcurrent) {
        this.maxConcurrent = maxConcurrent
        this.queue = []
        this.pendingCount = 0
    }

    enqueue(task) {
        if (this.pendingCount <= this.maxConcurrent) {
            this.pendingCount++
            task.finally(() => {
                this.pendingCount--
                this.dequeue();
            })
        } else {
            this.queue.push(task)
        }
    }

    dequeue() {
        if (this.pendingCount <= this.maxConcurrent && this.queue.length > 0) {
            this.pendingCount++
            this.queue.shift().finally(() => {
                this.pendingCount--
                this.dequeue()
            })
        }
    }
}


const timeout = (val, time) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(val)
            console.log(val)
        }, time)
    })
}
const task1 = timeout(1, 500)
const task2 = timeout(2, 1000)
const task3 = timeout(3, 200)
const task4 = timeout(4, 900)
// 使用示例
const limiter = new RequestLimiter(3); // 限制并发请求数量为3
limiter.enqueue(task1);
limiter.enqueue(task2);
limiter.enqueue(task3);
limiter.enqueue(task4);