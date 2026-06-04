/// @file
/// @brief Mixed Actor and PubSub system for Node.js
/// @details Based on decl DSL specification
/// @author Dmitry Ponyatov <dponyatov@gmail.com>
/// @date 22/05/2026 17:06


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
        this.ac = true; ///< AC power status (true = online)
        this.acv = 0;///< current voltage input (mains)
        this.dcv = 0; ///< Current voltage output
        this.dci = 0;///< Current load (A)
        this.bat = 0;///< lead acid battery voltage
    }
}

let power = new Topic('power');
let DC12 = new DC(12, 2);
let DC24 = new DC(24, 4);
console.log(DC12);
console.log(DC24);
let overcurrent = new Actor('+I'); // short circuit
broker.sub(overcurrent, 'power');
let onbattery = new Actor('-V'); // AC fail: on battery
broker.sub(onbattery, 'power');
console.log(power);
console.log(broker);
