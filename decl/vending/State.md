# State
## состояние вендингового аппарата

```decl
class State {
	topic: group 'Machine/States' // broker's topic

	// state can have some fixed symbolic values:
	enum value { A B C }
	// or measurement unit-tagged value:
	enum value<U> { OK U | ERROR U }
	// also value range can be applied:
	enum value<0..12V>

	entry {}                      // action on state entry
	exit  {}                      // action on state exit
}
```
```decl
class OkHigh: State {
  enum value<x:Measurement> { // some unit
    OK       x                                      // value в норме
    ERR_HIGH x { entry: high!alert 'повышено {_}' } // сообщить статус на ВУ
  }
}

class OkHighLow: OkHigh {
  enum value<x:Measurement> { // some unit
    ERR_LOW  x { entry: high!alert 'понижено {_}' } // add low value error
  }
}

```

- [[decl/core/group|group]]

## [[StateGlobal]]
