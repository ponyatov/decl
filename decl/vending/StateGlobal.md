# StateGlobal

```decl
state StateGlobal {
	// use class name as sub/topic
	topic: group 'Machine/States/{Self}' 
	
	// state can have some fixed symbolic values:
	enum value { A B C }
	// or measurement unit-tagged value:
	enum value<U> { OK U | ERROR U }
	// also value range can be applied:
	enum value<0..12V>
}

// Уникальное имя аппарата
state StateName: StateGlobal { value: str<id>  }

// Дата введения в эксплуатацию
state StartDate: StateGlobal { value: ts<date> }
```

![[StateMode]]
![[StateVoltage]]
![[StateCurrent]]
![[StateEnv]]

| `Machine/States/Env/Temp` | OK<br>ERR_HIGH<br>ERR_LOW | Температура окружающей среды в норме<br>Температура окружающей среды повышена<br>Температура окружающей среды понижена | - <br>Завершить текущую команду бизнес логики. Выключить все хабы, кроме `Hub-Low`<br>Выдать предупреждение о пониженной температуре | Усредненное значение температуры с датчиков окружающей среды<br>-<br>-
| `Machine/States/Env/Hum` | OK<br>ERR_HIGH | Влажность окружающей среды в норме<br>Влажность окружающей среды повышена | - <br>Завершить текущую команду бизнес логики. Выключить все хабы, кроме `Hub-Low` | Усредненное значение влажности с датчиков окружающей среды<br>-
