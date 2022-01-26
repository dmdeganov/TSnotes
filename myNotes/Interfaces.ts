//TITLE: Interfaces;
// interface Point {
//   x: number;
//   y: number;
// }

// // Extending an interface

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

//NOTE: Adding new fields to an existing interface
// interface Developer {
//   name: string;
// }
// interface Developer {
//   language: string;
// }
// const james: Developer = {
//   name: "James",
//   language: "javascript",
// };
// console.log(james); //{ name: 'James', language: 'javascript' }

//NOTE: Interface extension with [propName]
// interface User {
//   name: string;
//   age: number;
//   [propName: string]: any;
// }

// const yauhen: User = {
//   name: "Yauhen",
//   age: 31,
//   nickName: "webDev",
//   justTest: "test",
// };

//NOTE: readonly modificator
// interface User {
//     readonly name: string,
//     age: number,
// }
