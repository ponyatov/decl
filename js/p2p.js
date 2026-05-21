class Protocol {}

class PingPong extends Protocol {
    constructor(p1, p2) {
        super();
        p1.peer = p2;
        p2.peer = p1;
        p1.state = 'ping';
        p1.run();
        p2.run();
        p1.run();
        p2.run();
    }
}

class Message {
    #src;
    #dst;
    #id;
    static #_id = 0;
    #ts;
    #data;
    constructor(src, dst, data) {
        this.#src = src;
        this.#dst = dst;
        this.#id = Message.#_id++;
        this.#ts = Date.now();
        this.#data = data;
    }

    toString() {
        return `${this.#src.name}-${this.#id}->${this.#dst.name} ${this.#data}`;
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

    #msg;
    #peer;
    #state = 'idle';

    set state(other) {
        this.#state = other;
    }

    set msg(message) {
        this.#msg.push(message);
        console.log(`${this} push ${message}`);
    }

    get msg() {
        return this.#msg.shift();
    }

    set peer(actor) {
        this.#peer = actor;
    }

    constructor(name) {
        this.#name = name;
        this.#msg = [];
    }

    toString() {
        return `${this.#name}[${this.#msg
            .map((m) => {
                m;
            })
            .join(',')}]`;
    }

    run() {
        console.log(`${this} ${this.#state}`);
        switch (this.#state) {
            case 'idle':
                break;
            case 'beacon':
                this.#state = 'ping';
                break;
            case 'ping':
                this.#peer.msg = new Ping(this, this.#peer);
                this.#state = 'idle';
                break;
            case 'recv':
                this.#state = 'pong';
                break;
            case 'pong':
                break;
        }
    }
}

p1 = new Actor('p1');
p2 = new Actor('p2');
p2p = new PingPong(p1, p2);
