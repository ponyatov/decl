# StateVoltage

```decl
// состояние по напряжению
state StateVoltage {
	enum value<V> : OkHighLow // Volts
}
```

```decl
// Входное напряжение электропитания
state MainsVoltage: StateGlobal,StateVoltage {
	enum value<180..280V> // IEC 60038 range
}
```
