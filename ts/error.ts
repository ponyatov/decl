/**
 * @file error.ts
 * @brief Error classes for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

/**
 * @brief Error thrown when identifier name format is invalid
 * @param {any} object - object will be dumped with error message
 */
export class NameError extends Error {
    constructor(object: Object) {
        super(`object name must be valid identifier\n${object}`);
    }
}
