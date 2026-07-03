/**
 * @file message.mjs
 * @brief Actor message implementation for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 03/06/2026
 */

import { str, uint } from './types.ts';
import { NameError } from './error.ts';
import { Actor } from './actor.ts';

export class Message extends Object {
    /// static counter for unique message IDs
    static #_id: uint = 0;

    // === fields =====
    src: Actor; // sender actor
    dst: Actor; // receiver actor or group
    id: uint; // unique message id
    ts: number; // send time marker (ms since epoch)
    sel: string; // message selector (actor/object method name)
    data?: any; // method parameters (optional)

    /**
     * @brief Create a new Message instance
     * @param {Actor} src - Sender actor
     * @param {Actor|Group} dst - Receiver actor or group
     * @param {string} sel - Message selector (actor/object method name)
     * @param {any} data - Method parameters (optional)
     */
    constructor(src: Actor, dst: Actor, sel: string, data: any = null) {
        super(null); // messages don't have names
        this.src = src;
        this.dst = dst;
        this.id = Message.#_id++;
        this.ts = Date.now();
        if (sel !== null && !/^[_a-zA-Z][_a-zA-Z0-9]*$/.test(sel)) {
            throw new NameError(sel);
        }
        this.sel = sel;
        this.data = data;
    }
}
