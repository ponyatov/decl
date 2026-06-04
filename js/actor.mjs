/**
 * @file actor.mjs
 * @brief Actor model implementation for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 03/06/2026
 */

import { Object } from './object.mjs';
import { Message } from './message.mjs';

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

    toString() {
        return `${this.name}[${this.mailbox}]`;
    }

    push(msg) {
        this.mailbox.push(msg);
        setImmediate(() => this.dispatch());
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

    /**
     * @brief Override process(msg) for message handling
     * @param {Message} msg - Message to process
     * @description
     * performance rules:
     * - keep process() as short and fast as possible
     * - split long work into multiple self-sends if you can
     * - never block in process()
     */
    process(msg) {
        console.log(`${this}.process ${msg}`);
    }
}

export default { Actor };

let src = new Actor('src');
let dst = new Actor('dst');
console.log(src);
console.log(dst);
src.send(dst, 'ping');
