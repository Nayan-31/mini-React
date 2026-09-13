# TypeScript OOP practice

A small Node.js playground with strict TypeScript checking.

## Run

```sh
npm install
npm run dev
```

Edit `src/index.ts` and save. Watch mode reruns the file automatically.
Use `npm start` for a single run, `npm run example` for the completed example,
and `npm run typecheck` to check all TypeScript files for errors.
The runner executes TypeScript without checking types, so run the typecheck
command as you practice.

## The four pillars

| Pillar | Meaning | Example in `examples/oop.ts` |
| --- | --- | --- |
| Encapsulation | Keep internal state behind a controlled public interface. | Private `#energy`, a getter, and `feed()`. |
| Abstraction | Expose a contract while hiding implementation details. | Abstract `Animal` requires `speak()`. |
| Inheritance | Derive a class from another to reuse or extend behavior. | `Dog` and `Cat` extend `Animal`. |
| Polymorphism | Use a common type with different implementations. | Call `speak()` on each item in an `Animal[]`. |

## Practice

Build a library system in `src/index.ts`:

1. Create a `Book` class with private availability state and public `borrow()`,
   `returnBook()`, and `isAvailable()` methods. Prevent borrowing twice.
2. Introduce an abstract `LibraryItem` class with a title and an abstract
   `describe(): string` method.
3. Make `Book` and `Magazine` extend `LibraryItem` and implement `describe()`.
4. Store both in a `LibraryItem[]` and print each description in a loop.

Try borrowing the same book twice, returning it, and borrowing it again.
Then add a third item type and use it in the same loop.
