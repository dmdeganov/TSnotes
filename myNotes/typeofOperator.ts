// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

let s = "hello";
let n: typeof s;

// let n: string

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;
//If we try to use ReturnType on a function name, we see an instructive error:

type R = ReturnType<typeof f>;
// Remember that values and types aren’t the same thing. To refer to the type that the value f has, we use typeof

//  it’s only legal to use typeof on identifiers (i.e. variable names) or their properties.
let shouldContinue: typeof msgbox("Are you sure you want to continue?"); 