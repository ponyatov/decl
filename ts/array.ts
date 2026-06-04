/**
 * @file array.ts
 * @brief Fixed-size array type for Decl language runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 * @details Implements a fixed-size, contiguous memory array.
 *          In low-level targets (C++), this maps to a static C array.
 *          In JS/TS, it acts as a wrapper over a standard array with a fixed length.
 */

import type { uint } from './types.js';

/**
 * @brief Fixed-size array (compile-time constant length)
 * @example
 *   const size = 256;
 *   console.log(new Array<u8>(size)); // allocate fixed buffer
 */
export class Array<T> {
    readonly len: uint;
    private _data: T[];
    [index: uint]: T;

    /**
     * @brief Create new fixed-size array
     * @param size - Number of elements (must be compile-time constant)
     */
    constructor(len: uint) {
        this.len = len;
        this._data = new globalThis.Array<T>(len);
    }

    /// @brief size in bytes (unapplicable in TS/JS)
    // fn size -> uint

    *[Symbol.iterator](): Iterator<T> {
        for (let i = 0; i < this.len; i++) yield this._data[i];
    }
}

console.log(new Array<uint>(11));
for (let i of new Array(4)) console.log(i);
