/**
 * @file actor.mjs
 * @brief Actor model implementation for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 03/06/2026
 */

import { Message } from './message.ts';
import { SelectorError, NoMessageError } from './error.ts';

export class Actor extends Object {
    mailbox: Message[];

    constructor(name: string) {
        super(name);
        this.mailbox = [];
    }

    push(msg: Message) {
        this.mailbox.push(msg);
        setImmediate(() => this.dispatch());
    }

    pop(): Message {
        let msg = this.mailbox.shift();
        if (msg === undefined) {
            throw new NoMessageError(this);
        }
        return msg;
    }
    /**
     * @brief Dispatch and process all messages in mailbox
     * @description
     * Actor message handlers must be defined with signature:
     *   handler(msg:Message) {}
     *
     * Performance rules:
     * - keep handler() as short and fast as possible
     * - split long work into multiple self-sends if you can
     * - never block in handler()
     */
    dispatch() {
        while (this.mailbox.length > 0) {
            let msg: Message = this.pop();
            let handler = (this as any)[msg.sel];
            if (typeof handler === 'function') handler.call(this, msg);
            else throw new SelectorError(msg);
        }
    }
}
