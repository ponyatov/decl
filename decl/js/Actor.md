# [[decl/js/Actor|Actor]]
## compilation to JS

![[decl/core/Message]]

```js
class Actor {
	#name // optional name
	#msg  // message mailbox
    constructor(name) {
        this.#name = name;
        this.#msg = [];
    }
}
```
