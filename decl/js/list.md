
output must be:
```
empty_list:[]
empty_list:[]
```

most close generated JS code but with errors: list as null string
```js
let empty_list = [];
console.log(`empty_list: ${empty_list}`);
```
fixed code:
```js
let empty_list = [];
console.log(`empty_list:${empty_list.length === 0 ? '[]' : empty_list}`);
```
