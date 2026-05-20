# Functions

- free named functions
	- lambdas
	- local functions
- methods

```decl
fn optional_name [arguments] -> return_type {
	return value;
	last_expression // can be used w/o return keyword (good for tiny code)
}
```

## Unified Call Syntax (UFCS)

UFCS is a feature that blurs the line between free functions (not tied to a type) and member methods: it allows you to call a function using the dot notation commonly associated with object-oriented programming without need function to be a class or trait/type method:

- any free function can be called as a method
	- in case passing object as a first argument
	- and other optional arguments

`object.do(someting) <~> do(&object,something)`

- enables natural **method chaining**, allowing complex operations to be written as a clear, linear dotted pipeline (e.g., `data.filter().map().sort()`) instead of nested function calls
- Programmers can use their IDE's code completion after typing a dot (`.`) to see all applicable functions, including free functions that take the object as their first argument

## no-parens

there is a feature proposed by some languages, that aims to allow any function definitions and calls to be written with more readable syntax:
- optional parens
	- no parents for calling no-argument functions
	- arguments can be splitted
- optional name: lambdas
- return type can be inferred and can be omitted

no-parens syntax and UFCS  is that they are distinct but highly complementary features: when combined, they create a programming experience that feels truly "fluent" and natural syntax

```decl
obj.size        // call .size() method w/o parameters
obj.value       // return from .value() getter
obj.value = 123 // set .value field with .value(n:int) setter
obj.scale 1.5   // no-parens call
```

## functional polymorphism

we can have multiple functions definition with the same name, which will be selected by arguments & return type pattern matching
