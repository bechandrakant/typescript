function add(a: number, b: number) {
  return a + b;
}

console.log(add(5, 4));
// add('foo', 2); // Error

// optional arguments
function sum(a: number, b: number, c?: number, d?: number) {
  //TODO
}

sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);

// default value arguments
function defaultValue(a: number, b: number, c: number = 0, d: number = 0) {
  //TODO
}

defaultValue(1, 2);
defaultValue(1, 2, 3);
defaultValue(1, 2, 3, 4);

// Specify return type of function
function returnType(a: number, b: number, c: number): number {
  return a + b + c;
}