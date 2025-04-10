// pair-sum/pairSum.test.js
import assert from 'assert'
import { pairSumA, pairSumB } from './pairSum.js'

const testCases = [
  { arr: [1, 2, 3, 4, 5], target: 9, expected: true }, // 4 + 5
  { arr: [1, 2, 3, 4, 5], target: 10, expected: false }, // no such pair
  { arr: [], target: 0, expected: false },
  { arr: [1], target: 1, expected: false },
  { arr: [2, 2, 3, 4], target: 4, expected: true }, // 2 + 2
  { arr: [1, 3, 3, 4], target: 6, expected: true } // 3 + 3
]

describe('pairSumA', () => {
  for (const { arr, target, expected } of testCases) {
    it(`pairSumA(${JSON.stringify(arr)}, ${target}) === ${expected}`, () => {
      assert.strictEqual(pairSumA(arr, target), expected)
    })
  }
})

describe('pairSumB', () => {
  for (const { arr, target, expected } of testCases) {
    it(`pairSumB(${JSON.stringify(arr)}, ${target}) === ${expected}`, () => {
      assert.strictEqual(pairSumB(arr, target), expected)
    })
  }
})
