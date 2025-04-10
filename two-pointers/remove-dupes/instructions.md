# Remove Duplicates from Sorted Array

## 🧠 The Problem

You're given a **sorted** array of integers. Your task is to return a new array
where **each element appears only once**, and all duplicates are removed.

The result should preserve the sorted order.

## 🐢 Naive Solution: `removeDupesA`

Iterate through the array and compare each element to the next one. If it’s
different from the next, add it to a result array.

- Time complexity: O(n)
- Space complexity: O(n)

## 🐇 Two-Pointer Solution: `removeDupesB`

1. Use a `write` pointer to track where the next unique number should go.
2. Start `read` from index 1 and scan through the array.
3. If `arr[read] !== arr[read - 1]`, write it to `arr[write]`, then increment
   `write`.
4. At the end, return `arr.slice(0, write)` to get the unique portion.

- Time complexity: O(n)
- Space complexity: O(1) extra space (excluding the returned slice)
- This modifies the array in-place and avoids allocating a second array during
  scanning.
