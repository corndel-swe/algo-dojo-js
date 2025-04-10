# 📊 Sum Effort

## 🧠 The problem

Each task in the tree has an `effort` value, which is a number. Your job is to
return the total effort of the root task and all its descendants.

You should write two versions:

- `sumEffortA`: uses an iterative approach
- `sumEffortB`: uses recursion

---

## 🔁 Iterative approach: `sumEffortA`

Use a stack to walk through the tree and add up each node’s effort.

Steps:

1. Create a variable `total` and start it at 0.
2. Create a stack with the root node in it.
3. While the stack is not empty:
   - Remove the top node from the stack.
   - Add its `effort` to `total`.
   - Add each of its children to the stack.
4. Return `total`.

---

## 🌀 Recursive approach: `sumEffortB`

Let the function return the node’s own effort plus the sum of its children's
efforts.

Steps:

1. Start with the current node’s `effort`.
2. For each child in the node’s children, call the function recursively and add
   the result.
3. Return the total.
