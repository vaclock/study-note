class ObserverAble {
    constructor() {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(item => item !== observer)
    }

    notify(data) {
        this.observers.map(item => item.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    update(data) {
        console.log(`${this.name}收到消息：${data}`)
    }
}

const observable = new ObserverAble();

const observer1 = new Observer('Observer1');
const observer2 = new Observer('Observer2');
const observer3 = new Observer('Observer3');

observable.subscribe(observer1)
observable.subscribe(observer2)
observable.subscribe(observer3)
observable.notify('111')

