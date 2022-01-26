// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

type StringNumberPair = [string, number];
// Here, StringNumberPair is a tuple type of string and number. Like ReadonlyArray, it has no representation at runtime, but is significant to TypeScript. To the type system, StringNumberPair describes arrays whose 0 index contains a string and whose 1 index contains a number.
function doSomething(pair: [string, number]) {
  const a = pair[0];

  // const a: string;
  const b = pair[1];

  // const b: number;
}

doSomething(["hello", 42]);
function doSomething1(pair: [string, number]) {
  // ...

  const c = pair[2];
}
type Either2dOr3d = [number, number, number?];

////NOTE: optional elements in tuple
type Either2dOr3d1 = [number, number, number?];
function setCoordinate(coord: Either2dOr3d1) {
  const [x, y, z] = coord;

  // const z: number | undefined

  console.log(`Provided coordinates had ${coord.length} dimensions`);
}
setCoordinate([23, 45, 78]); //Provided coordinates had 3 dimensions
// Tuples can also have rest elements, which have to be an array/tuple type.

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
