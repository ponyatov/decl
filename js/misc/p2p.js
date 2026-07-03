// PingPong protocol - actor-based messaging

let id = 0;
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

class Msg {
    constructor(src, dst, type) {
        this.src = src;
        this.dst = dst;
        this.type = type || this.constructor.name.toLowerCase();
        this.id = id++;
        this.ts = Date.now();
    }
}
class Ping extends Msg {}
class Pong extends Msg {}

class Actor {
    constructor(name) {
        this.name = name || 'actor';
        this.mail = [];
        this.peer = null;
        this.state = 'idle';
    }

    send(msg) {
        this.mail.push(msg);
    }

    recv() {
        let m = this.mail.shift();
        if (!m) return;

        if (m.type == 'ping') {
            console.log(`${this.name} recv ping #${m.id}`);
            this.peer.send(new Pong(this, this.peer));
            this.state = 'pong';
        } else if (m.type == 'pong') {
            console.log(`${this.name} recv pong #${m.id}`);
            this.state = 'idle';
        }
    }

    ping() {
        if (this.state != 'idle') return;
        this.send(new Ping(this, this.peer));
        this.state = 'ping';
        console.log(`${this.name} send ping`);
    }

    step() {
        this.recv();
        if (this.state == 'idle') this.ping();
    }
}

class PingPong {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        a.peer = b;
        b.peer = a;
    }

    async run(ticks = 10) {
        for (let i = 0; i < ticks; i++) {
            this.a.step();
            this.b.step();
            await delay(1000);
        }
    }
}

// Demo
let p1 = new Actor('alice');
let p2 = new Actor('bob');
let app = new PingPong(p1, p2);
app.run(5);
