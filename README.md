# Cassidy Williams Weekly Newsletter Interview Questions

Welcome to the repository for solving Cassidy Williams' weekly interview questions from her [newsletter](https://cassidoo.co/newsletter/)! This repository will be used to document and share my solutions to her interesting coding challenges.

## Structure

Challenges are organized by year and date, with each stored in a directory named after the issue date. For example, a challenge titled 'Determine the longest unique number' from April 15, 2024, would be in the 2024/2024-04-15 directory.

## TypeScript to JavaScript Conversion

To convert TypeScript files to JavaScript, use the `tsconfig.json` setup by running:

```bash
npm run build
```

This compiles all `.ts` files into `.js` files based on the configuration.

## Testing with Vitest

This project uses **Vitest** for testing. To run the tests, simply use the following command:

```bash
pnpm run test
```

If you haven’t installed Vitest yet, you can add it with:

```bash
pnpm install --save-dev vitest
```
