// //NOTE: Class Interface
// interface User {
//   name: string;
//   age: number;
//   getPass(): string;
// }

// class Yauhen implements User {
//   name: string = "Yauhen";
//   age: number = 31;
//   nickName: string = "webDev"; // <-- Not in the interface, and it is valid
//   getPass() {
//     return `${this.name}${this.age}`;
//   }
// }
// //NOTE:  Create Class based on multiple interfaces
// interface User1 {
//   name: string;
//   age: number;
// }

// // Separate interface with one method
// interface Pass {
//   getPass(): string;
// }

// class Yauhen1 implements User, Pass {
//   name: string = "Yauhen";
//   age: number = 31;

//   getPass() {
//     return `${this.name}${this.age}`;
//   }
//   language: "russian";
// }
