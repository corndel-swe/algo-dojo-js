import assert from 'assert'
import { removeDupesA, removeDupesB } from './removeDupes.js'

const testCases = [
  { arr: [], expected: [] },
  { arr: [1], expected: [1] },
  { arr: [1, 1, 1, 1], expected: [1] },
  { arr: [1, 2, 2, 3, 3, 3, 4], expected: [1, 2, 3, 4] },
  { arr: [1, 1, 2, 3, 3, 4, 4, 4, 5], expected: [1, 2, 3, 4, 5] }
]

describe('removeDupesA', () => {
  for (const { arr, expected } of testCases) {
    it(`removeDupesA(${JSON.stringify(arr)}) === ${JSON.stringify(
      expected
    )}`, () => {
      assert.deepStrictEqual(removeDupesA(arr), expected)
    })
  }
})

describe('removeDupesB', () => {
  for (const { arr, expected } of testCases) {
    it(`removeDupesB(${JSON.stringify(arr)}) === ${JSON.stringify(
      expected
    )}`, () => {
      assert.deepStrictEqual(removeDupesB([...arr]), expected)
    })
  }
})
