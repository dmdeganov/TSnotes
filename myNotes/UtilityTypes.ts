////NOTE: read only
// interface User {
//     name: string;
// }

// const user: Readonly<User> = {
//     name: 'Yauhen',
// };

// user.name = 'Max';      // Error: cannot reassign a readonly property
////NOTE: required
// interface Props {
//   a?: number;
//   b?: string;
// }

// const obj: Props = { a: 5 }; // OK

// const obj2: Required<Props> = { a: 5 }; // Error: property 'b' missing
////NOTE:Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type

// interface CatInfo {
//   age: number;
//   breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
// };

// cats.boris;
////NOTE:Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;
// // so we can create a new type with less keys than in initial type

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };

// console.log(todo);
////NOTE: Omit<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Omit<Todo, "description">;
// //  create a new type with deleted  keys from initial interface

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };
////NOTE:Exclude<UnionType, ExcludedMembers>
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
// type T0 = Exclude<"a" | "b" | "c", "a">;
// // type T0 = "b" | "c";
// // deletes some types from union types
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

// // type T1 = "c";
// type T2 = Exclude<string | number | (() => void), Function>;

// // type T2 = string | number;

////NOTE:Extract<Type, Union>
// type T0 = Extract<"a" | "b" | "c", "a" | "f">; // type T0 = "a"
// // gets from union type only specified cases
// type T1 = Extract<string | number | (() => void), Function>; //type T1 = () => void

////NOTE: NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.
//type T0 = NonNullable<string | number | undefined>; //type T0 = string | number;

////NOTE: ReturnType<Type>
// // // Constructs a type consisting of the return type of function Type.
// type T0 = ReturnType<() => string>; //type T0 = string

// type T1 = ReturnType<(s: string) => void>; // void

// type T2 = ReturnType<<T>() => T>; // unknown
// type T3 = ReturnType<<T extends X, X extends number[]>() => T>; // number[]

// declare function f1(): { a: number; b: string };
// type T4 = ReturnType<typeof f1>; // { a: number, b: string }

// type T5 = ReturnType<any>; // any
// type T6 = ReturnType<never>; // any
// type T7 = ReturnType<string>; // Error
// type T8 = ReturnType<Function>; // Error

////NOTE:InstanceType<Type>
// Constructs a type consisting of the instance type of a constructor function in Type.
// class C {
//   x = 0;
//   y = 0;
// }

// type T0 = InstanceType<typeof C>; // C
// type T1 = InstanceType<any>; // any
// type T2 = InstanceType<never>; // any
// type T3 = InstanceType<string>; // Error
// type T4 = InstanceType<Function>; // Error

////NOTE:Partial<Type>
// // Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
// interface Todo {
//   title: string;
//   description: string;
// }
// type Part = Partial<Todo>;
// // type Part = {
// //   title?: string;
// //   description?: string;
// // };
