# Shift Zeros

## 🧠 The Problem

You're given an array of numbers. Move all the `0`s to the **end of the array**,
while maintaining the relative order of the non-zero elements.

Return a new array with the result.

## 🐢 Naive Solution: `shiftZerosA`

Use two temporary arrays to separate the values.

Steps:

1. Create an empty array for non-zero values.
2. Create another empty array for zeros.
3. Loop through the input array:
   - If the value is zero, add it to the zeros array.
   - Otherwise, add it to the non-zero array.
4. Return a new array formed by concatenating the non-zero values followed by
   the zeros.

- Time complexity: O(n)
- Space complexity: O(n), because it creates two new arrays and returns a third

## 🐇 Two-Pointer Solution: `shiftZerosB`

1. Create a copy of the array.
2. Use a `write` pointer starting at 0.
3. Loop through the array:
   - If the current element is **non-zero**, write it to the `write` position
     and increment `write`.
4. After the loop, fill the remaining elements of the array with `0`.

- Time complexity: O(n)
- Space complexity: O(n)
- Avoids creating new arrays, adding to space complexity
