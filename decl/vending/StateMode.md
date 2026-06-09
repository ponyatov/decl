# StateMode

```decl
state StateMode: StateGlobal {
	topic: 'Machine/States/Mode'

	enum value {
		OK       // Аппарат работает в штатном режиме
		SERVICE  // Обслуживание персоналом (закладка ТМЦ, очистка,..)
		DEPLOY   // Обновление прошивки
		ERROR    // Аппарат находится в нештатном режиме
	}

	command cells {
		OK : { process cells  }
		_  : { src!error self } // \ Никакие бизнес команды
		                        // / выполнятся не должны
	}
}
```
