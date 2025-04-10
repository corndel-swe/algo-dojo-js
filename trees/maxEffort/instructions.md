# 🏋️ Max Effort

## 🧠 The problem

Each task has an `effort` number. Write a function `maxEffort(node)` that
returns the largest effort value found in the entire tree.

You should write two versions:

- `maxEffortA`: uses an iterative approach
- `maxEffortB`: uses recursion

---

## 🔁 Iterative approach: `maxEffortA`

Use a stack and keep track of the largest effort seen so far.

Steps:

1. Start with `max` equal to the root node’s effort.
2. Create a stack with the root node in it.
3. While the stack is not empty:
   - Remove a node.
   - If the node’s effort is greater than `max`, update `max`.
   - Add each child to the stack.
4. Return `max`.

---

## 🌀 Recursive approach: `maxEffortB`

Let the function return the maximum of the current node’s effort and all its
children.

Steps:

1. Start with the current node’s effort.
2. For each child, call the function recursively and compare the result to the
   current max.
3. Return the largest value found.
