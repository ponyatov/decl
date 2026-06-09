# State
## состояние вендингового аппарата

```decl
class State {
	topic: group 'Machine/States' // broker's topic
	entry {}                      // action on state entry
	exit  {}                      // action on state exit
}
```

- [[decl/core/group|group]]

## [[StateGlobal]]
