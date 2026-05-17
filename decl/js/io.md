# js::io
## std::io implementation in JS

```decl
class io {
	// default `<<` operator for any output
	op << &self any =
		console.log(any)
		return self
}
```

![[decl/core/hello|hello]]

must be translated into optimized single line:

```js
console.log('Hello,', 'World!');
```
