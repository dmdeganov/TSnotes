// // function printId(id: number | string) {
// //   console.log(id.toUpperCase());
// // }
// //// will get an error

// //NOTE:The union number | string is composed by taking the union of the values from each type.
// function printId(id: number | string) {
//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }
