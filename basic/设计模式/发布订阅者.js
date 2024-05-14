class EventEmitter {
    constructor() {
        this.events = []
    }

    on(eventname, callback) {
        if (this.events[eventname]) {
            this.events[eventname].push(callback)
        } else {
            this.events[eventname] = [callback]
        }
    }

    emit(eventname, data) {
        this.events[eventname].map(item => {
            item(data)
        })
    }

    off(eventname, callback) {
        if (this.events[eventname]) {
            this.events[eventname] = this.events[eventname].filter(item => item !== callback)
        }
    }
}

const eventemitter = new EventEmitter()
const cb1 = function(data) {
    console.log(data, 'cb1')
}
const cb2 = function(data) {
    console.log(data, 'cb2')
}
const cb3 = function(data) {
    console.log(data, 'cb3')
}
eventemitter.on('event1', cb1)
eventemitter.on('event1', cb3)
eventemitter.on('event2', cb2)
eventemitter.on('event2', cb1)
eventemitter.emit('event1', 111)
eventemitter.off('event1', cb1)
eventemitter.emit('event1', 222)