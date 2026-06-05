/**
 * @file error.mjs
 * @brief Error classes for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 03/06/2026
 */

/**
 * @class Error
 * @brief Base error class for Decl runtime
 * @param {any} object - object will be dumped with error message
 * @extends global.Error
 */
export class Error extends global.Error {
    constructor(object) {
        super(object);
        this.name = this.constructor.name;
    }
}

/**
 * @brief Error thrown when identifier name format is invalid
 */
export class NameError extends Error {
    constructor(object) {
        super(`object name must be valid identifier\n${object}`);
    }
}

/**
 * @brief Error thrown when incoming message selector not defined in actor
 */
export class SelectorError extends Error {
    constructor(object) {
        super(`unknown message selector\n${object}`);
    }
}

export default { Error, NameError, SelectorError };
