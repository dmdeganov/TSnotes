// TITLE: Literal Inference
// type GetOrPost = "GET" | "POST";
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// // ---cut---
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// In the above example req.method is inferred to be string, not "GET"
// //NOTE: There are two ways to work around this:
// //NOTE: Change 1:

// type GetOrPost = "GET" | "POST";
// declare function handleRequest(url: string, method: GetOrPost): void;
// // ---cut---
// const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method);
// //NOTE: Change 2
// type GetOrPost = "GET" | "POST";
// declare function handleRequest(url: string, method: GetOrPost): void;
// // ---cut---
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method as "GET");
// //NOTE: Change 3
// // You can use 'as const' to convert the entire object to be type literals:
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// // ---cut---
// const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);
// // he as const suffix acts like const but for the type system
