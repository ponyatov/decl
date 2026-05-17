# int
## integer numbers

```decl
// generic integer
type int: num {}         // generic int
type i8,u8: int<8>       // 8-bit signed/unsigned int
...
type i64,u64: int<64>    // max register size on x86_64
type i128,u128: int<128> // quad math (optional)
```
