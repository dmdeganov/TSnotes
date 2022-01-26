//TITLE:strictNullChecks: on
// // With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value
// function doSomething(x: string | null) {
//   if (x === null) {
//     // do nothing
//   } else {
//     console.log("Hello, " + x.toUpperCase());
//   }
// }
//TITLE: Non-null Assertion Operator (Postfix!)
// // Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
// function multiplyByTwo(num: number | null | undefined) {
//   return num * 2;
// }
// function multiplyByTwoNew(num: number | null | undefined) {
//   return num! * 2;
// }
