# pubsub
## Pub/Sub extension for Actor model

## Broker

```decl
class Broker: Server {
	static glob:Broker            // system-wide message broker (singleton)
	connect: {                         // connection config
		ip       = localhost
		port     = 1883
		protocol = MQTT
		library  = mqttc|paho|libmosquitto
	}

	topic:map<name, topic>             // model: topics registry
}
```

## Topic

- proxy [[decl/core/group|group]] on external [[#Broker]]

```decl
class Topic:Group {
	
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
