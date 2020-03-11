## Hexagonal Architecture using Typescript

The codebase is splitted into three different parts:

- **Application**: This is the part where the user interact with the app, control the domain -> printing into the console.
- **Domain**: This is our business logic -> read poems.
- **Infrastructure**: This is the part where we have the code that communicate with the database or the code that drives the HTTP calls -> we have three different adapters: sqlite, txt and mock.

For more informations please refer to my blog.

This code is mostly inspired by [Thomas PIERRAIN](https://github.com/tpierrain/hexagonalThis).
Thanks to him for his talk and code.
