// The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:
type Point = { x: number; y: number };
type P = keyof Point;
const letter: P = "x";
// If the type has a string or number index signature, keyof will return those types instead:
type Arrayish = { [n: number]: unknown };
const arrayish: Arrayish = {
  [5]: "number",
};
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
