# DC
## DC power supply model (simulator)

```decl
actor DC {
	voltage:uf16.1 // nonimal voltage (positive float with .n precision)
	current:uf16.1 // nominal current
	ac:bool        // AC powered
	battery:uf16.1 // lead acid battery voltage
	simulate       // slowly increases/decreases V/I with random AC faults
}
```
```js
class DC extends Actor {
}
```