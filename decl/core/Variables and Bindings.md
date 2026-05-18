# Variables and Bindings

```
let name = "Alice"    // immutable by default
let value: int = 1234 // optional type selector
var Sp = 0:u16        // numeric literals also can have type selector
```

- types:
	- by default: used automatic type inference
	- any variables can have optional type
- mutability
	- `let`: immutable variable = single assignment variable
		- recommended for all new variables, until you really need mutability
	- `var`: mutable **variable**
	- `const`: module-level constant
- name conditions:
	- ClassNames and TypeNames
		- decl core level types uses low cases: int u8 i32 ...
		- the same for [[decl/core/Containers]]: str vec map queue
	- variable_names
	- CONSTANTS
- Rust-like ownership and borrowing checks applied
	- default: warnings
	- strict mode: Rust-like errors
