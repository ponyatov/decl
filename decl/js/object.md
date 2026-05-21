# object
## translation to JS

```decl
object Labuba {}
```
```js
class Labuba {}
```

## extending root Object class

```decl
class Object {
	log { io::log << self }
}
```
```js
Object.prototype.log = function() {
	console.log(this);
}
```
