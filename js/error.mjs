/**
 * @file error.mjs
 * @brief Error classes for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 03/06/2026
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
