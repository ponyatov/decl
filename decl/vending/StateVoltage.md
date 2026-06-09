# StateVoltage

```decl
// состояние по напряжению
state StateVoltage: StateGlobal {
	enum value<V> { // Volts
		OK       V  // напряжение в норме
		ERR_HIGH V  // повышено
		ERR_LOW  V  // 
	}
}
```

```decl
// Входное напряжение электропитания
state MainsVoltage: StateVoltage {
	enum value<180..280V> { // IEC 60038
		ERR_HIGH { entry: hi!alert 'Сетевое напряжение повышено' }
		ERR_LOW  { entry: hi!alert 'Сетевое напряжение понижено' }
	}
}
```
