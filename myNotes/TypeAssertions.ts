// //TITLE: Type Assertions
// // when we know and sure what type is going to be

// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// const myCanvasAnotherSyntax = <HTMLCanvasElement>(
//   document.getElementById("main_canvas")
// );
// const x = "hello" as number;
// // this assertion is impossible
// // Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to any (or unknown, which we’ll introduce later), then to the desired type:
// const a = (expr as any) as T;
