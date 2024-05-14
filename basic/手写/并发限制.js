function limitConcurrency(tasks, limit) {
    const executing = [];
    const enqueue = task => {
        const prom = Promise.resolve().then(task);
        executing.push(prom);
        const finish = () => executing.splice(executing.indexOf(prom), 1);
        prom.then(finish, finish);
        return prom;
    };
    const run = () => {
        if (tasks.length && executing.length < limit) {
            enqueue(tasks.shift()).then(run);
        }
    };
    // .then(() => Promise.all(executing))
    return Promise.all(tasks.slice(0, limit).map(enqueue)).then(() => {
        if (tasks.length) {
            return run();
        }
    });
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
const task4 = timeout(3, 900)

limitConcurrency([task1, task2, task3, task4], 2);