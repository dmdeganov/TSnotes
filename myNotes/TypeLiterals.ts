// // TITLE:Literal Types
// let changingString = "Hello World";
// changingString = "Olá Mundo";
// // Because `changingString` can represent any possible string, that is how TypeScript describes it in the type system changingString ==> let changingString: string
// const constantString = "Hello World";
// // Because `constantString` can only represent 1 possible string, it has a literal type representation ==> const constantString: "Hello World";
// let x: "hello" = "hello";
// let b: "hello" = "good bye";
// // It’s not much use to have a variable that can only have one value!
// //
// // But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
// function printText(s: string, alignment: "left" | "right" | "center") {
//   // ...
// }
// printText("Hello, world", "left");
// printText("G'day, mate", "centre");
// // Of course, you can combine these with non-literal types:
// function configure(x: Options | "auto") {
//   // ...
// }
// interface Options {
//   width: number;
// }
