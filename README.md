# Algo Dojo

<p align="center">
  <img width="200px" src="images/logo.png" />
</p>

Welcome, warrior!

This is your training ground for mastering algorithms and data structures. In
this dojo, you’ll learn to spot inefficiencies, sharpen your skills, and write
code that performs like a champion.

## 🔢 Sorting

The `sorting/` directory doesn’t contain exercises — instead, it demonstrates
how to **benchmark different sorting algorithms**.

To try it out:

```bash
node sorting/sorting.benchmark.js
```

The algorithm with the highest **operations per second** is the most performant.

## 🪄 Two Pointers

The `two-pointers/` directory contains problems that can be solved either with:

- A **naive nested loop** approach
- A **two-pointer** strategy (more efficient!)

Each folder includes an `instructions.md` file that describes both approaches.
Your task:

1. Reproduce the logic in code
2. Run the tests with:

   ```bash
      # To test individual test suites:
      # npm test path/to/test.js
      npm test ./two-pointers/remove-dupes/removeDupes.test.js

      # To run all test suites:
      npm run test-all
   ```

3. Benchmark the performance by running the `*.benchmark.js` script in each
   folder

You'll see how smarter techniques can drastically improve performance.

## 🌲 Trees

In the `trees/` directory, you'll work on recursive data structures — problems
where each node can contain subtasks (children).

You’ll solve each problem using both:

- An **iterative** approach using a stack
- A **recursive** approach using the call stack

Each folder contains:

- An `instructions.md` file explaining both solutions step-by-step
- Tests to validate your work
- A benchmark script to compare approaches

## 🚀 Beyond

This repo gives you a taste of solving problems using different techniques
across two classic domains: arrays and trees.

As you train, you’ll notice the same patterns show up again and again.

The key is learning to recognise which technique unlocks the best performance,
and mastering the tools that help you get there.

Good luck, warrior 💪
