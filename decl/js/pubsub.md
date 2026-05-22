# [[decl/js/pubsub|pubsub]]
# compiled to JS

```js
class Broker {}

let broker = new Broker('broker')

class Topic {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
        broker.push(this);
    }
}
```
