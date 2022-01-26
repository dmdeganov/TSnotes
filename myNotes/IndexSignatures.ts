// Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

// // In those cases you can use an index signature to describe the types of possible values, for example:
// function getStringArray(): StringArray {
//   return ["james", "mary"];
// }
// // ---cut---
// interface StringArray {
//   [i: number]: string;
// }
// // NOTE:  Above, we have a StringArray interface which has an index signature. This index signature states that when a StringArray is indexed with a number, it will return a string.

// const myArray: StringArray = getStringArray();

// const secondItem = myArray[1];
// console.log(secondItem);

// interface User {
//   name: string;
//   age: number;
//   [propName: string]: any;
// }
