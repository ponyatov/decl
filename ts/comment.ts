/**
 * @file comment.ts
 * @brief TypeScript comment examples compiled by Decl language
 * @author Dmitry Ponyatov <dponyatov@gmail.com>
 * @date 04/06/2026
 * @details Demonstrates line comments, block comments, and JSDoc/TSDoc
 *          documentation comments as used in Decl-to-TypeScript translation.
 */

// line comment - single line comment inherited from C/C++

/* block
   comment - can span multiple lines */

/**
 * TSDoc / JSDoc comment block
 * @param x - first operand
 * @param y - second operand
 * @returns sum of x and y
 */
function add(x: number, y: number): number {
    return x + y;
}
