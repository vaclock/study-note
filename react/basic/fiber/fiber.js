
let tasks = [];

let isRendering = false;

const channel = new MessageChannel();
const port = channel.port2;

function scheduleTask(task, expirationTime) {
    tasks.push({
        task,
        expirationTime
    });
    if (!isRendering) {
        isRendering = true;

        // 向port1发送一条null消息，port1接收到消息之后进行任务的执行（找帧空闲时间）
        port.postMessage(null);
    }
}

function performTask(currentTime) {

    // console.log(currentTime, 'currentTime');
    let frameTime = 1000 / 60;

    while (tasks.length > 0 && performance.now() - currentTime < frameTime) {
        const {
            task,
            expirationTime
        } = tasks.shift();

        if (performance.now() >= expirationTime) {
            // 任务已经过期
            console.log(performance.now(), expirationTime);
            task();
        }
        else {
            tasks.push({
                task,
                expirationTime
            });
        }

        // let res = ''
        // tasks.map(item => res += item.task.name)
        // console.log(res);
    }

    if (tasks.length) {
        requestAnimationFrame(performTask);
    }
    else {
        isRendering = false;
    }
}

channel.port1.onmessage = () => requestAnimationFrame(performTask);

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