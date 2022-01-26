// // TITLE: classes
// class User {
//   name: string;
//   age: number;
//   nickName: string;

//   constructor(name: string, age: number, nickName: string) {
//     this.name = name;
//     this.age = age;
//     this.nickName = nickName;
//   }
// }
// // NOTE:// // Class types modificators
// class User1 {
//   public name: string;
//   private nickName: string;
//   protected age: number;
//   readonly pass: number;

//   constructor(name: string, age: number, nickName: string, pass: number) {
//     this.name = name;
//     this.age = age;
//     this.nickName = nickName;
//     this.pass = pass;
//   }
// }

// const yauhen = new User1("Yauhen", 31, "webDev", 123);

// // yauhen.name; // "Yauhen"
// // yauhen.nickName; // Prop 'nickName' is private and only accessible within class 'User'
// // yauhen.age; // Prop 'age' is protected and only accessible within class 'User' and its subclasses
// // yauhen.pass = 42; // Cannot assign to 'pass' because it is a read-only property

// // NOTE: // Class default properties
// class User2 {
//   name: string;
//   age: number = 20;
//   nickName: string = "webDev";

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const user = new User2("Yauhen");

// user; // { name: "Yauhen", age: 20, nickName: "webDev" }
// // NOTE: Class default parameters
// class User3 {
//   name: string;
//   age: number = 20;
//   nickName: string = "webDev";

//   constructor(name: string = "James") {
//     this.name = name;
//   }
// }

// const user1 = new User3();

// user; //User { age: 20, nickName: 'webDev', name: 'James' }
// // NOTE: // // Minimization of Class properties
// class User4 {
//   constructor(
//     public name: string,
//     public age: number,
//     protected nickName: string,
//     public pass: number
//   ) {}
// }
// // it is necessary to define all modificators even public here
// // NOTE: // // We can use setters or regular methods  to  change private property
// class User5 {
//   private age: number = 20;

//   constructor(public name: string) {}

//   setAge(age: number) {
//     this.age = age;
//   }

//   set myAge(age: number) {
//     this.age = age;
//   }
// }
