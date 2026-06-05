/**
 * @file error.ts
 * @brief Error classes for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

/**
 * @brief Error thrown when identifier name format is invalid
 */
export class NameError extends Error {
    constructor(object: Object) {
        super(`object name must be valid identifier\n${object}`);
    }
}

/** @brief Error thrown when incoming message selector not defined in actor */
export class SelectorError extends Error {
    constructor(object: Object) {
        super(`unknown message selector\n${object}`);
    }
}

/** @brief Error thrown when pop from empty mailbox */
export class NoMessageError extends Error {
    constructor(object: Object) {
        super(`mailbox empty in\n${object}`);
    }
}
