# [[decl/core/Actor|Actor]]
## compilation to JS

![[decl/js/Message]]

```js
/**
 * @class Actor
 * @brief Base class for all actors in the Decl system
 * @extends Object
 * @description Actors are concurrent entities communicating via async message passing.
 *              Each actor has a mailbox and processes messages sequentially.
 *              In decl language any Object almost equal to Actor:
 *              - sync  method  call: object.method [arguments]
 *              - async message send: object!method [arguments]
 */
export class Actor extends Object {
    constructor(name) {
        super(name);
        this.mailbox = [];
    }

    push(msg) {
        this.mailbox.push(msg);
        this.dispatch();
    }

    pop() {
        return this.mailbox.shift();
    }

    send(dst, selector, data) {
        dst.push(new Message(this, dst, selector, data));
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
