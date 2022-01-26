// // //NOTE:syntax with functions
// const getterES6 = <T>(data: T): T => data;

// function getterES5<T>(data: T): T {
//   return data;
// }
// // // Defining issue immediately
// const getter = <T>(data: T): T => data;

// // getter(10).length; // Property 'length' does not exist on type '10'
// getter("test").length; // 4

// //NOTE: syntax with classes
// class User<T> {
//   constructor(public name: T, public age: T) {}

//   public getPass(): string {
//     return `${this.name}${this.age}`;
//   }
// }

// const yauhen = new User("Yauhen", "31");
// const max = new User(123, 321);

// yauhen.getPass(); // "Yauhen31"
// max.getPass(); // "123321"

// //NOTE:multiple types
// class User<T, K> {
//   constructor(public name: T, public age: K) {}

//   public getPass(): string {
//     return `${this.name}${this.age}`;
//   }
// }

// const yauhen = new User("Yauhen", "31"); // string, string
// const max = new User(123, 321); // number, number
// const leo = new User("Leo", 22); // string, number

// yauhen.getPass(); // "Yauhen31"
// max.getPass(); // "123321"
// leo.getPass(); // "Leo22"

////NOTE: Specify generic type 'K' with key-word 'extends'
// class User<T, K extends number> {
//   constructor(public name: T, public age: K) {}

//   public getPass(): string {
//     return `${this.name}${this.age}`;
//   }

//   public getSecret(): number {
//     return this.age ** 2;
//   }
// }
