// //TITLE: annotating functions
// //NOTE:notating returned types
// // if doesn't return anything:
// const greetUser = (): void => {
//   alert("Hello, nice to see you!");
// };
// // if there's an error:
// const msg = "hello";
// const error = (msg: string): never => {
//   throw new Error(msg);
// };
// //if function never ends
// const infiniteLoop = (): never => {
//   while (true) {}
// };
// //NOTE: notating rest parameters
// const createSkills = (name: string, ...skills: string[]) =>
//   //or we could have used ...skills: Array<string>
//   `${name}, my skils are ${skills.join()}`;
// // console.log(createSkills1("Jack", "JS", "ES6", "React")); // the same output
// //NOTE:optioanal parameter
// const createPassword = (name: string, age?: number) => `${name}${age}`;
