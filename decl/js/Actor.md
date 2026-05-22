# [[decl/core/Actor|Actor]]
## compilation to JS

![[core/js/Message]]

```js
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

    process(msg) {
        console.log(`${this} got ${msg}`);
    }
}
```
