/**
 * @file types.ts
 * @brief Core type definitions for Decl language runtime
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 */

// ---------------
// Primitive types
// ---------------

/** @brief Generic number type (int | float) */
export type num = number;

/** @brief Integer types */
export type int = num;
export type uint = num;
export type i8 = num;
export type u8 = num;
export type i16 = num;
export type u16 = num;
export type i32 = num;
export type u32 = num;

/**
 * @brief 64-bit integer types
 * @details MUST use bigint because JS Number cannot represent full 64-bit range
 *          max safe int: 2^53-1, but u64 needs up to 2^64-1
 */
export type i64 = bigint;
export type u64 = bigint;

/**
 * @brief Floating point types
 * @detailes fit in JS number (IEEE 754 double) */
export type float = number;
export type f16 = number; // used in embedded systems, graphics & ML
export type f32 = number;
export type f64 = number;

/** @brief Boolean type */
export type bool = boolean;

/** @brief UTF-8 string */
export type str = string;

/** @brief Single character (JS string of length 1) */
export type char = string;

// -------
// special
// -------

/**
 * @brief Dynamic type with runtime type checking
 * @details TypeScript's type
 */
// export type any = any;

/**
 * @brief Absence of value (for functions returning nothing)
 * @details TypeScript's type, in JS undefined
 */
// export type void = void;

/** @brief Function never returns, or type impossible */
// export type never = never;

/**
 * @brief type that has exactly one possible value
 * @details used where a value is required syntactically
 *          but carries no information;
 *          some languages uses () literal as unit value
 * */
export type unit = undefined;
export const unit: unit = undefined;

export const undef = undefined;

// ---------------
// Container types
// ---------------

export * from './array.ts';
