# Shift Zeros

## 🧠 The Problem

You're given an array of numbers. Move all the `0`s to the **end of the array**,
while maintaining the relative order of the non-zero elements.

Return a new array with the result.

## 🐢 Naive Solution: `shiftZerosA`

Iterate through the array:

- If you find a zero, remove it with `splice()` and `push(0)` to the end
- Keep track of how many zeros you've moved

- Time complexity: O(n²) due to repeated splicing and shifting
- Space complexity: O(n) due to copying

## 🐇 Two-Pointer Solution: `shiftZerosB`

1. Create a copy of the array.
2. Use a `write` pointer starting at 0.
3. Loop through the array:
   - If the current element is **non-zero**, write it to the `write` position
     and increment `write`.
4. After the loop, fill the remaining elements of the array with `0`.

- Time complexity: O(n)
- Space complexity: O(n)
- Avoids costly `splice()` operations and keeps non-zero order
