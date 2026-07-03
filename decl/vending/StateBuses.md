# StateBuses

```decl
state StateBuses<Index:1..5> {
	topic: group 'Machine/States/Buses/{Index}/{Self}'
}

state StateBusesVoltage: StateBuses,StateVoltage {}
state StateBusesCurrent: StateBuses,StateCurrent {}
```

- [[StateVoltage]]
- [[StateCurrent]]
