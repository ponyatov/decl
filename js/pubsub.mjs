/**
 * @file pubsub.mjs
 * @brief Pub/Sub extension for Actor model
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

import { Object } from './object.mjs';
import { NameError } from './error.mjs';

export class Topic extends Object {}

export class Broker extends Object {
    constructor(ip = 'localhost', port = 1883) {
        self.connect = {
            ip: ip,
            port: port
        };
    }
}

export default { Topic, Broker };
