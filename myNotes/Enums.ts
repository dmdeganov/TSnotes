// // TITLE: Enums
// //  Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime.
// enum Direction {
//   Up = 1,
//   Down, //2
//   Left, //3
//   Right, //4
// }
// console.log(Direction[1]); //'Up'
// console.log(Direction[4]); // 'Right'

// enum DirectionNoNumbered {
//   Up, //0
//   Down, //1
//   Left, //2
//   Right, //3
// }

// enum DirectionWeirdNumbered {
//   Up = 2,
//   Right = 4,
//   Left = 6,
//   Down = 8,
// }
// console.log(DirectionWeirdNumbered[2]); //Up

// enum links {
//   youtube = "https://youtube.com",
//   vk = "https://vk.com",
//   facebook = "https://facebook.com",
// }
// //NOTE: const enums
// const enum linksConst {
//   youtube = "https://youtube.com",
//   vk = "https://vk.com",
//   facebook = "https://facebook.com",
// }
// const a = linksConst.vk;
// // in compiled js file we will get:
// // const a = "https://vk.com" /* vk */;
// console.log(a);
