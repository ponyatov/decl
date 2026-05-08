# decl
## metacircular Decl language specification

> defines `decl` syntax & semantics in `decl` itself

```decl
// root superclass
class Object { 
    kw='class'          // keyword
    init(name:str)      // any object can have name
}
```

```decl
// hardware item or component
class HW {}
// hardware subsystem
class HWSection: HW {}

// software component
class Software { kw='sw' }
// prococol
class Protocol { kw='protocol' }

```
