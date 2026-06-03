# pubsub
## Pub/Sub extension for Actor model

```decl
class Broker: Server {
	connect: {                         // connection config
		ip       = localhost
		port     = 1883
		protocol = MQTT
		library  = mqttc|paho|libmosquitto
	}

	topic:map<name, topic>             // model: topics registry
}

class Topic:Group {
	static broker:Broker               // system-wide message broker
	
	init name { broker.push self }     // autoregister new topic
	
	sub      { broker.self!sub   src } // \ proxy calls to broker
	unsub    { broker.self!unsub src }
	pub data { broker.self!pub data  } // /
}
```
```decl
power:topic   // variable creation with type/class: class.name = var.name
power.sub log // subscribe logger to power-meters message bus
```

- [[decl/core/group|group]]
- [[decl/js/pubsub]]
- [[decl/net/mqtt|mqtt]]
