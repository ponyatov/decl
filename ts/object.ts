/**
 * @file object.ts
 * @brief Root Object class implementation for Decl runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

import { NameError } from './error.ts';
import { str } from './types.ts';

/**
 * @brief Root class for all objects in Decl system
 * @description Every Decl object inherits from this base class.
 *              Provides naming, optional (de)serialization, debugging and metrics.
 */
export class Object {
    /**
     * @brief Optional object name
     * @details Must be valid identifier in any target language:
     */
    name: str | null;

    /**
     * @brief Create new Object instance
     * @param name - Optional name identifier
     * @throws NameError when name format is invalid
     */
    constructor(name: str | null = null) {
        if (name !== null && !/^[_a-zA-Z][_a-zA-Z0-9]*$/.test(name)) {
            throw new NameError(name);
        }
        this.name = name;
    }
}
