//TITLE:Indexed Access Types
// We can use an indexed access type to look up a specific property on another type:

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // type Age = number

type I1 = Person["age" | "name"]; //type I1 = string | number

// We can combine this with typeof to conveniently capture the element type of an array literal:
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
  { language: "russian", likesChina: false },
];
type Person1 = typeof MyArray[number];
//TITLE: Conditional types
//   SomeType extends OtherType ? TrueType : FalseType;

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

//TITLE:Mapped types
// A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
// In this example, OptionsFlags will take all the properties from the type Type and change their values to be a boolean.
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// type FeatureOptions = {
//     darkMode: boolean;
//     newUserProfile: boolean;
// }
////NOTE:mapping modifiers
// There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.

// You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.

//TITLE:Key Remapping via as
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person2 {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person2>;
// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// };
