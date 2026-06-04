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
    [index: uint]: T;

    readonly len: uint;
    private _data: T[];

    /// @section constructor

    /**
     * @brief Create new fixed-size array
     * @param arg - Number of elements (must be compile-time constant)
     *        arg - initializer array
     */
    constructor(arg: uint | Iterable<T>) {
        if (typeof arg === 'number') {
            this.len = arg;
            this._data = new globalThis.Array<T>(this.len);
        } else {
            this._data = globalThis.Array.from(arg);
            this.len = this._data.length;
        }
    }

    /// @brief size in bytes (unapplicable in TS/JS)
    // fn size -> uint

    /// @section accessor

    get(index: uint): T | undefined {
        return this._data[index];
    }

    set(index: uint, value: T): void {
        this._data[index] = value;
    }

    /// @section iterator

    *[Symbol.iterator](): IterableIterator<T> {
        for (let i = 0; i < this.len; i++) yield this._data[i];
    }

    *keys(): IterableIterator<uint> {
        for (let i = 0; i < this.len; i++) {
            yield i;
        }
    }

    *entries(): IterableIterator<[uint, T]> {
        for (let i = 0; i < this.len; i++) {
            yield [i, this._data[i]];
        }
    }
}
