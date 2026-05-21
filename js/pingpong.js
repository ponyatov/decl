/// @file PingPong protocol implementation

class Message {
    static #id = 0;

    constructor(src, dst, msg = this.constructor.name.toLowerCase()) {
        this.src = src; // source node
        this.dst = dst; // destination node
        this.msg = msg; // message type
        this.id = Message.#id++; // unique message id
        this.ts = Date.now(); // timestamp
    }

    toString() {
        return `[${this.src.name}#${this.id}→${this.dst.name}:${this.msg}]`;
    }
}

class Ping extends Message {}
class Pong extends Message {}

class Actor {
    #name; // optional name
    #msg; // messages mailbox
    #peer;
    #state = 'idle';

    state() {
        console.log(this, this.#state);
        // switch (this.#state) {
        //     case 'idle':
        //         break;
        //     case 'beacon':
        //         this.#state = 'ping';
        //         break;
        //     case 'ping':
        //         this.#peer.send = new Ping();
        //         this.#state = 'idle';
        //         break;
        //     case 'pong':
        //         this.#state = 'idle';
        //         break;
        //     case 'recv':
        //         break;
        // }
    }

    constructor(name) {
        this.#name = name || 'actor';
        this.#msg = [];
        this.beacon = () => {
            this.#state = 'beacon';
        };
    }

    get pop() {
        return this.#msg.shift();
    }
    set push(message) {
        this.#msg.push(message);
    }

    send(message) {
        this.push(message);
    }

    get name() {
        return this.#name;
    }

    toString() {
        return `${this.#name}[${this.#msg.map((m) => m.toString()).join(',')}]`;
    }
}

class Client extends Actor {
    constructor(name) {
        super(name || 'client');
    }
}

class Server extends Actor {
    constructor(name) {
        super(name || 'server');
    }
}

class Protocol {
    #beacon = 1000; // 1<s>
    #timer;
    get beacon() {
        return this.#beacon;
    }
    // set beacon(lambda) {
    //     this.#timer = setInterval(lambda, this.#beacon);
    // }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class PingPong extends Protocol {
    #client;
    #server;
    constructor(client, server) {
        super();
        this.#client = client;
        this.#server = server;
        this.#client.peer = this.#server;
        this.#server.peer = this.#client;
    }

    run() {
        while (true) {
            this.#client.state();
            this.#server.state();
            delay(1000);
        }
    }
}

client = new Client();
server = new Server();
p2p = new PingPong(client, server);
p2p.run();
