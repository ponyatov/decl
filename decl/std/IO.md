# `std::IO`

## console
and primitive [[decl/core/log]]

```decl
io out // C: stdout
io log // C: stdlog
io err // C: stderr
```

```decl
out << "Hello," << 'World!'
```
- `<<` output operator
	- by default, spaces used as delimiters between multiple items
- both `""` and `''` [[decl/core/str|string literals]] used
