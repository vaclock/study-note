let tasks = [];

let isRendering = false;

const channel = new MessageChannel();
const port = channel.port1;

function scheduleTask(task, expirationTime) {
    tasks.push({
        task,
        expirationTime
    })
    if (!isRendering) {
        isRendering = true;
        channel.port2.postMessage(null, port);
    }
}

function taskProcess(currentTime) {
    const frameTime = 10000 / 60;
    while(tasks.length > 0 && performance.now() - currentTime <= frameTime) {
        const {
            task,
            expirationTime
        } = tasks.shift();

        if (performance.now() >= expirationTime) {
            task();
        }
        else {
            tasks.push({
                task,
                expirationTime
            })
        }
    }

    if (tasks.length > 0) {
        requestAnimationFrame(taskProcess);
    }
    else {
        isRendering = false;
    }
}

port.onmessage = () => {
    requestAnimationFrame(taskProcess);
}


function task1() {
    console.log('current run task1');
}

function task2() {
    console.log('current run task2');
}

function task3() {
    console.log('current run task3');
}

scheduleTask(task1, performance.now() + 1000);
scheduleTask(task2, performance.now());
scheduleTask(task3, performance.now() + 3000);
/**
 * 1 2 3
 *
 * 2 3 1 ---> 消费2
 * 3 1
 * 1 3   ---> 消费1
 * 3     ---> 消费3
 */