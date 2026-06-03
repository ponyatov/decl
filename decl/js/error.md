# [[decl/core/error]]
## compiled to JS

```js
/**
 * @file error.mjs
 * @brief Error classes for Decl runtime
 */

/**
 * @class Error
 * @brief Base error class for Decl runtime
 * @extends global.Error
 */
export class Error extends global.Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

/**
 * @class NameError
 * @brief Error thrown when identifier name format is invalid
 * @extends Error
 */
export class NameError extends Error {
    constructor(message = null) {
        super(message ? message : `object name must be valid identifier`);
    }
}

export default { Error, NameError };
```
