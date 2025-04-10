import assert from 'assert'
import { shiftZerosA, shiftZerosB } from './shiftZeros.js'

const testCases = [
  { arr: [], expected: [] },
  { arr: [0], expected: [0] },
  { arr: [1], expected: [1] },
  { arr: [0, 1, 0, 2, 3], expected: [1, 2, 3, 0, 0] },
  { arr: [1, 0, 2, 0, 3, 0], expected: [1, 2, 3, 0, 0, 0] },
  { arr: [0, 0, 0, 1, 2], expected: [1, 2, 0, 0, 0] },
  { arr: [1, 2, 3], expected: [1, 2, 3] }
]

describe('shiftZerosA', () => {
  for (const { arr, expected } of testCases) {
    it(`shiftZerosA(${JSON.stringify(arr)}) === ${JSON.stringify(
      expected
    )}`, () => {
      assert.deepStrictEqual(shiftZerosA(arr), expected)
    })
  }
})

describe('shiftZerosB', () => {
  for (const { arr, expected } of testCases) {
    it(`shiftZerosB(${JSON.stringify(arr)}) === ${JSON.stringify(
      expected
    )}`, () => {
      assert.deepStrictEqual(shiftZerosB(arr), expected)
    })
  }
})
