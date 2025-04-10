# 🧮 Count Tasks

## 🧠 The problem

You are given a tree of tasks. Each task has a `children` property that may
contain a list of subtasks.

Write a function `countTasks(node)` that returns the total number of tasks in
the tree, including the root and all descendants.

You should write two versions:

- `countTasksA`: uses an iterative approach
- `countTasksB`: uses recursion

---

## 🔁 Iterative approach: `countTasksA`

Use a stack to simulate walking through the tree.

Steps:

1. Create a counter (start at 0).
2. Create a stack with the root node in it.
3. While the stack is not empty:
   - Remove the top node from the stack.
   - Increment the counter.
   - Add each of the node’s children to the stack.
4. Return the counter.

---

## 🌀 Recursive approach: `countTasksB`

Let the function call itself for each node’s children.

Steps:

1. Count 1 for the current node.
2. For each child in the node’s children, call the function recursively and add
   the result to your count.
3. Return the total count.
