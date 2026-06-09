# StateCurrent

```decl
// состояние по току
state StateCurrent: StateGlobal {
	enum value<A> { // Ampers
		OK       A  // ток в норме
		ERR_HIGH A  // повышено
	}
}
```
