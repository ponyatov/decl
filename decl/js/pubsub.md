# [[decl/js/pubsub|pubsub]]

- compiled to JS

```js
class TopicExists extends Error {}

class Broker {
    constructor() {
        this.topics = new Map();
    }

    push(topic) {
        if (this.topics.has(topic.name)) throw new TopicExists();
        this.topics.set(topic.name, topic);
    }
}

var broker = new Broker('broker');

/// pub/sub topic - actors can subscribe and publish
class Topic {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
        broker.push(this); // auto-register with global broker
    }
}
```

- use sample

```js
let power = new Topic('power');
console.log(power);
console.log(broker);
```


[[decl/hw/dc]]