import assert from 'assert'
import { reverseArrayA, reverseArrayB } from './reverseArray.js'

const testCases = [
  { arr: [], expected: [] },
  { arr: [1], expected: [1] },
  { arr: [1, 2], expected: [2, 1] },
  { arr: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
  { arr: ['a', 'b', 'c'], expected: ['c', 'b', 'a'] }
]

describe('reverseArrayA', () => {
  for (const { arr, expected } of testCases) {
    it(`reverseArrayA(${JSON.stringify(arr)}) === ${JSON.stringify(
      expected
    )}`, () => {
      assert.deepStrictEqual(reverseArrayA(arr), expected)
    })
  }
})

describe('reverseArrayB', () => {
  for (const { arr, expected } of testCases) {
    it(`reverseArrayB(${JSON.stringify(arr)}) === ${JSON.stringify(
      expected
    )}`, () => {
      assert.deepStrictEqual(reverseArrayB(arr), expected)
    })
  }
})
