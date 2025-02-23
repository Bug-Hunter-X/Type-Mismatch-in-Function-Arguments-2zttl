function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 5); // Correct: No type error

function addString(a: string, b: string): string {
    return a + b
}

let stringResult = addString("hello", " world"); // Correct use of string addition

//If you need a function to handle both number and string, use type union
function addFlexible(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return a.toString() + b.toString();
  }
}

let flexibleResult = addFlexible(10, "20"); // Example of flexible addition
console.log(flexibleResult); // Output: "1020"