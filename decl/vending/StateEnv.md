# StateEnv

```decl
// environmental state
state StateEnv: StateGlobal {
	topic: 'Machine/States/Env/{Self}'
}

state StateTemp: StateEnv {
	enum value<C>: OkHighLow // °C celsius
}

state StateHum: StateEnv {
	enum value<%>: OkHigh // relative percents
}

// процедура останова для глобальных env-статусов
action GlobEnvStop {
	command  ! stop     // Завершить текущую команду бизнес логики
	hub_mid  ! shutdown
	hub_high ! shutdown
}

// усреднённая температура с нескольких датчиков
state EnvTemp: StateEnv,StateTemp {
	enum value<0..40C>
	entry: GlobEnvStop
}

// усреднённая влажность с нескольких датчиков
state EnvHum : StateEnv,StateHum {
	enum value<..80%>
	entry: GlobEnvStop
}
```
