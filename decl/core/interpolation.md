# [[decl/core/str|string]] interpolation

- `{expr}` evaluates as `(expr).str` with stringify method run
- `{expr?}` evaluates as `(expr).dump` print in `decl` literal syntax (parens, delimiters,..)
- `${expr}` for prints in form `expr:value` (.str)
- `${expr?}` for prints in form `expr:{value}` (.dump)

```decl
let empty_list   = []
var heterogenous = [ 1 ; 2.3 ; 'hello' ];

out << `empty_list:{empty_list}` // with string interpolation
out << `${empty_list}`           // ${v} interpolates into 'v:value'
```
