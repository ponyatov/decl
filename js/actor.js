/// @file
/// @brief Mixed Actor and PubSub system for Node.js
/// @details Based on decl DSL specification
/// @author Dmitry Ponyatov <dponyatov@gmail.com>
/// @date 22/05/2026 17:06

/// @brief any message sent between actors (directly or via topics)
class Message {
    static #id = 0; // static counter for unique message IDs generation

    constructor(src, dst, data) {
        this.src = src; ///
        this.dst = dst; ///
        this.id = Message.#id++;
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
        dst.push(new Message(this, dst, data));
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

class TopicExists extends Error {}

class Broker {
    constructor() {
        this.topics = new Map();
    }

    push(topic) {
        if (this.topics.has(topic.name)) throw new TopicExists();
        this.topics.set(topic.name, topic);
    }

    sub(actor, topic) {
        if (!this.topics.has(topic)) {
            throw new TopicExists(`${topic}`);
        }
        this.topics.get(topic).push(actor);
    }
}

var broker = new Broker('broker');

class Topic {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
        broker.push(this);
    }

    push(actor) {
        if (!this.subscribers.includes(actor)) {
            this.subscribers.push(actor);
        }
        console.log(`subscribers:${this.subscribers}`);
    }
}

class DC extends Actor {
    constructor(voltage, current) {
        super(`DC${voltage}`);
        this.voltage = voltage; ///< Nominal voltage (V)
        this.current = current; ///< Max current (A)
    }
}

let power = new Topic('power');
let DC12 = new DC(12,2);
let DC24 = new DC(24,4);
console.log(DC12);
console.log(DC24);
let overcurrent = new Actor('+I'); // short circuit
broker.sub(overcurrent, 'power');
let onbattery = new Actor('-V'); // AC fail: on battery
broker.sub(onbattery, 'power');
console.log(power);
console.log(broker);
