/**
 * @file pubsub.mjs
 * @brief Pub/Sub extension for Actor model
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

import { Object } from './object.mjs';
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
        // config
        this.ip = ip;
        this.port = port;
        this.protocol = 'mqtt';
        // connect
        let url = `${this.protocol}://${this.ip}:${this.port}`;
        this.#mqtt = mqtt.connect(url);
        this.#mqtt.on('connect', () => {
            this.connect();
        });
        this.#mqtt.on('message', (topic, msg) => {
            this.message(topic, msg);
        });
    }

    dump = ['ip', 'port'];

    /**
     * @brief Register a new topic with the broker
     */
    push(topic) {
        this.topic[topic.name] = topic;
        this.#mqtt.publish(`${topic.name}/new`, `${topic}`);
    }

    connect() {
        console.log(this.connect);
        this.#mqtt.subscribe('#');
    }

    message(topic, msg) {
        console.log(this.name, this.message, topic, msg);
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

// $ mosquitto_sub -h localhost -t "hello"
let broker = new Broker();
console.log(`${broker}`);
let hello = new Topic('hello');
console.log(`${hello}`);
