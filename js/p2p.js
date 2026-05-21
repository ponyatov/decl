class Protocol {}

class PingPong extends Protocol {
    constructor(p1, p2) {
        super();
        p1.peer = p2;
        p2.peer = p1;
        p1.state = 'ping';
        for (let i = 0; i < 7; i++) {
            p1.run();
            p2.run();
        }
    }
}

class Message {
    #src;
    #dst;
    #id;
    static #_id = 0;
    #ts;
    #data;
    get data() {
        return this.#data;
    }
    constructor(src, dst, data) {
        this.#src = src;
        this.#dst = dst;
        this.#id = Message.#_id++;
        this.#ts = Date.now();
        this.#data = data;
    }

    toString() {
        return `${this.#src.name}:${this.#id}:${this.#dst.name} ${this.#data}`;
    }
}

class Ping extends Message {
    constructor(src, dst) {
        super(src, dst, 'ping');
    }
}

class Pong extends Message {
    constructor(src, dst) {
        super(src, dst, 'pong');
    }
}

class Actor {
    #name;
    get name() {
        return this.#name;
    }

    #peer;
    get peer() {
        return this.#peer;
    }

    #state = 'idle';

    get state() {
        return this.#state;
    }
    set state(other) {
        this.#state = other;
        console.log(`\t${this} -> ${this.state}`);
    }

    #msg;

    set msg(message) {
        this.#msg.push(message);
        console.log(`\t${this} push ${message}`);
    }

    get msg() {
        let t = this.#msg.shift();
        console.log(`\t${this} pop ${t}`);
        return t;
    }

    get pending() {
        return this.#msg.length > 0;
    }

    set peer(actor) {
        this.#peer = actor;
    }

    constructor(name) {
        this.#name = name;
        this.#msg = [];
    }

    toString() {
        return `${this.#name}[${this.#msg.length}]`;
    }

    run() {
        console.log(`${this} ${this.#state} ${this.pending}`);
        switch (this.state) {
            case 'idle':
                if (this.pending) this.state = 'recv';
                break;
            case 'beacon':
                this.state = 'ping';
                break;
            case 'ping':
                this.peer.msg = new Ping(this, this.peer);
                this.state = 'wait';
                break;
            case 'wait':
                if (this.pending) {
                    let msg = this.msg;
                    if (msg.data == 'pong') {
                        this.state = 'idle';
                    }
                }
                break;
            case 'recv':
                this.state = 'pong';
                break;
            case 'pong':
                this.peer.msg = new Pong(this, this.peer);
                this.state = 'idle';
                break;
            default:
                throw new Error(`${this.state}`);
        }
    }
}

p1 = new Actor('p1');
p2 = new Actor('p2');
p2p = new PingPong(p1, p2);
