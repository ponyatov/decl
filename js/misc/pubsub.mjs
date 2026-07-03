/**
 * @file pubsub.mjs
 * @brief Pub/Sub extension for Actor model
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

import { Object } from './object.mjs';
import { Actor } from './actor.mjs';
import mqtt from 'mqtt';

/**
 * @class Broker
 * @brief Central message broker for pub/sub system
 * @description Manages topics and routes messages to subscribers
 */
export class Broker extends Object {
    static glob = null; // system-wide broker (singleton)
    #mqtt = null; // MQTT server connection

    constructor(ip = 'localhost', port = 1883) {
        super('mqtt');
        Broker.glob = this;
        this.topic = new Map();
        this.connect = {
            ip: ip,
            port: port,
            protocol: 'mqtt'
        };
        let url = `${this.connect.protocol}://${this.connect.ip}:${this.connect.port}`;
        this.#mqtt = mqtt.connect(url);
        this.#mqtt.on('connect', () => {
            this.#mqtt.subscribe('#');
        });
        this.#mqtt.on('message', (topic, msg) => {
            let dst = this.topic.get(topic);
            if (dst === undefined) dst = new Topic(topic);
            dst.send(this, 'message', msg);
        });
    }

    dump = ['ip', 'port'];

    /**
     * @brief Register a new topic with the broker
     */
    push(topic) {
        this.topic[topic.name] = topic;
        // this.#mqtt.publish(`${topic.name}_new`, `${topic}`);
    }

}

/**
 * @class Topic
 * @brief Pub/Sub topic: proxy Group on external Broker
 * @description Manages subscribers for a specific message topic
 */
export class Topic extends Actor {
    constructor(name) {
        super(name);
        Broker.glob.push(this); // autoregister
    }
}

export default { Broker, Topic };

// $ mosquitto_sub -h localhost -t "hello"
let broker = new Broker();
console.log(`${broker}`);
// let hello = new Topic('hello');
// console.log(`${hello}`);
