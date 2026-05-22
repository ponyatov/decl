class Msg {
    constructor(src, dst, data) {
        this.src = src;
        this.dst = dst;
        this.ts = Date.now();
        this.data = data;
    }

    toString() {
        return `${this.ts} ${this.src}->${this.dst} ${this.data}`;
    }
}

class Actor {
    constructor(name) {
        this.name = name;
        this.mailbox = [];
    }

    toString() {
        return `${this.name}[${this.mailbox.length}]`;
    }

    push(msg) {
        this.mailbox.push(msg);
        this.dispatch();
    }

    pop() {
        return this.mailbox.shift();
    }

    send(dst, data) {
        dst.push(new Msg(this, dst, data));
    }

    dispatch() {
        while (this.mailbox.length > 0) {
            let msg = this.pop();
            this.process(msg);
        }
    }

    // override with real processing code
    process(msg) {
        console.log(`${this} got ${msg}`);
    }
}

let a = new Actor('alice');
let b = new Actor('bob');
console.log(`${a} -> ${b}`);
a.send(b, 'hello');
// console.log(`${a} -> ${b}`);

class Exists extends Error {}

class Broker {
    constructor() {
        this.topics = new Map();
    }

    push(topic) {
        if (this.topics.has(topic.name)) throw new Exists();
        this.topics.set(topic.name, topic);
    }
}

var broker = new Broker('broker');

class Topic {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
        broker.push(this);
    }
}

let power = new Topic('power');
console.log(power);
