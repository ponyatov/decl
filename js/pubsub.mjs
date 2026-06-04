/**
 * @file pubsub.mjs
 * @brief Pub/Sub extension for Actor model
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

import { Object } from './object.mjs';
import { NameError } from './error.mjs';

/**
 * @class Broker
 * @brief Central message broker for pub/sub system
 * @description Manages topics and routes messages to subscribers
 */
export class Broker extends Object {
    static glob = null;

    constructor(ip = 'localhost', port = 1883) {
        super('mqtt');
        this.connect = {
            ip: ip,
            port: port
        };
        this.topic = new Map();
        Broker.glob = this;
    }

    /**
     * @brief Register a new topic with the broker
     */
    push(topic) {
        this.topic[topic.name] = topic;
    }
}

/**
 * @class Topic
 * @brief Pub/Sub topic: proxy Group on external Broker
 * @description Manages subscribers for a specific message topic
 */
export class Topic extends Object {
    constructor(name) {
        super(name);
        Broker.glob.push(this); // autoregister
    }
}

export default { Broker, Topic };

let mqtt = new Broker();
console.log(mqtt);
let hello = new Topic('hello');
console.log(hello);
