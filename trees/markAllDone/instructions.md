# ✔️ Mark All Done

## 🧠 The problem

You are given a tree of tasks. Each task has a `done` property that is either
`true` or `false`.

Write a function `markAllDone(node)` that updates the task and all its subtasks
so that every `done` value is set to `true`.

This function should mutate the original data structure in place.

You should write two versions:

- `markAllDoneA`: uses an iterative approach
- `markAllDoneB`: uses recursion

---

## 🔁 Iterative approach: `markAllDoneA`

Use a stack to walk through the tree and mutate each node.

Steps:

1. Create a stack with the root node in it.
2. While the stack is not empty:
   - Remove the top node from the stack.
   - Set `done = true` on that node.
   - Add each of its children to the stack.

---

## 🌀 Recursive approach: `markAllDoneB`

Use a recursive function to update each node and its children.

Steps:

1. Set `done = true` on the current node.
2. Call the function recursively on each child.
