# StateEnv

```decl
// environmental state
state StateEnv: StateGlobal {
	topic: 'Machine/States/Env/{Self}'
}

state StateTemp: StateEnv {
	enum value {
		OK
		ERR_HIGH
		ERR_LOW
	}
}

state StateHum: StateEnv {
	enum value {
		OK
		ERR_HIGH
	}
}

state EnvTemp: StateTemp {}
state EnvHum : StateHum {}
```
