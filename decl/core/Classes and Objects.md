# Classes and Objects

![[decl/core/Object]]

## fields and methods

- fields not available directly: only getters/setters must be used (automatic property)
	- [[decl/core/getter]]
	- [[decl/core/setter]]
	- fields available from methods of sibled classes can be referenced directly without `self.` prefix (if has no mixes with method parameters of local variables)
- methods is functions takes first argument as `self` reference to object
	- does not need `fn` prefix
- special methods:
	- [[decl/core/constructor|constructor]]
	- [[delc/core/destructor|destructor]]
