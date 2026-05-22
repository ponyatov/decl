# pubsub
## Pub/Sub extension for Actor model

```decl
class Topic {
	name:?str
	subscribers:actor[]

	pub ?actor data { subscribers.push (msg src=actor dst=any data) }
	
	init name:?str { broker.push self } // autoregister new topic
	
	sub   ?actor { subscribers.add actor }
	unsub ?actor { subscribers.del actor }
}
```
```decl
power:topic   // variable creation with type/class: class.name = var.name
power.sub log // subscribe logger to power-meters message bus
```
```decl
error Exists

class Broker {
	topics:map<name:str, topic> // topics registry
	
	push  topic        {
		if topic in topics raise Exists      // check unicality
		else               topics.push topic }
	
	pub   ?actor topic data { topics[topic].push  actor data }
	sub   ?actor topic      { topics[topic].sub   actor }
	unsub ?actor topic      { topics[topic].unsub actor }
}

glob broker:Broker // system-wide message broker
```

- [[decl/js/pubsub]]