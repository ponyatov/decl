let empty_vec = []; // generic `Array` fallback
let num_vec = new Int32Array([1, 2, 3]); // `TypedArray` for primitive data
console.log(`empty_vec:${empty_vec}`);
console.log(`num_vec:${num_vec}`);

let empty_list = [];
console.log(`empty_list:${empty_list.length === 0 ? '[]' : empty_list}`);

let heterogenous = [1, 2.3, 'hello'];
console.log(`heterogenous: ${heterogenous}`);
