# TypeScript Fundamentals
This repository contains the code for the TypeScript Fundamentals training.
Examples and demo's on the training TypeScript Fundamentals by internationally acclaimed trainer Peter Kassenaar.

For more information, or a training at your location, please contact info@kassenaar.com

## Usage
- The directory `/src/ts` contains the TypeScript code. 
  - We can compile this to JavaScript using `tsc` and see it in action using the accompanying HTML file in the `/src/html` directory.
  - This is NOT mandatory, but it is a nice way to see the results of the TypeScript code in the browser.
- Run `npm install` to install the required dependencies.
- Run `npm run tsc` to run the TypeScript compiler and place compiled JavaScript in the `src/js` directory.
- The script is running in `watch` mode, meaning it will automatically recompile the TypeScript code when it detects changes.
- Press`Ctrl+C` to stop the script.

## Useful Links
Some links with extra information we discovered during the training. I found them useful:

- General TypeScript homepage: https://www.typescriptlang.org/ 
  - Visit this first! It is the official home of typescript. AI is often behind!
- Understanding the exclamation mark in Typescript: https://blog.logrocket.com/understanding-exclamation-mark-typescript/
- "`type` vs `interface`, which one to use?", great article by Matt Pocock: https://www.totaltypescript.com/type-vs-interface-which-should-you-use
- Nice article on user-defined type guards: https://bobbyhadz.com/blog/typescript-check-if-object-implements-interface.
- How to check an interface? You can't use `typeof`. But you CAN use the `in` type guard: https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
- How to get/create types based on the returned data from an array: https://steveholgado.com/typescript-types-from-arrays/
- The keyword `infer` in conditional types: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
- Overloaded functions with arrow syntax: https://stackoverflow.com/questions/39187614/typescript-overload-arrow-functions/53143568#53143568
- Video: assert functions: https://www.youtube.com/watch?v=8lM609lci7E (also watch other content from Matt Pocock!).
- Another blog on common TS mistakes: https://betterprogramming.pub/7-typescript-common-mistakes-to-avoid-581c30e514d6

## General TypeScript Gurus
- Matt Pocock: https://www.youtube.com/results?search_query=matt+pocock
- "17 most influential TypeScript Developers": https://echoglobal.tech/technologies/typescript/
- ...
