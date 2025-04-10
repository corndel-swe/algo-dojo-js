# Pair Sum

## 🧠 The Problem

You're given an array of integers and a target number. Your task is to determine
whether **any two distinct elements** in the array add up to the target.

Return `true` if such a pair exists, otherwise return `false`.

## 🐢 Naive Solution: `pairSumA`

Use two nested loops to check every pair `(i, j)` where `i < j`. For each pair,
check if `arr[i] + arr[j] === target`. If a match is found, return `true`.

- Time complexity: O(n²)

## 🐇 Two-Pointer Solution: `pairSumB`

1. First, **sort the array** (this adds an `O(n log n)` step).
2. Use two pointers:
   - `left` starts at index 0
   - `right` starts at the end of the array
3. While `left < right`:
   - Compute `sum = arr[left] + arr[right]`
   - If `sum === target`, return `true`
   - If `sum < target`, move `left` forward
   - If `sum > target`, move `right` backward
4. If the loop ends, return `false`.

- Time complexity: O(n log n)
- This works because the sorted structure lets you eliminate many unnecessary
  comparisons.
