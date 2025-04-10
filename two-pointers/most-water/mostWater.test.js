import assert from 'assert'
import { mostWaterA, mostWaterB } from './mostWater.js'

const testCases = [
  { arr: [], expected: 0 },
  { arr: [1], expected: 0 },
  { arr: [1, 1], expected: 1 },
  { arr: [1, 2, 1], expected: 2 },
  { arr: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
  { arr: [4, 3, 2, 1, 4], expected: 16 },
  { arr: [1, 2, 4, 3], expected: 4 }
]

describe('mostWaterA', () => {
  for (const { arr, expected } of testCases) {
    it(`mostWaterA(${JSON.stringify(arr)}) === ${expected}`, () => {
      assert.strictEqual(mostWaterA(arr), expected)
    })
  }
})

describe('mostWaterB', () => {
  for (const { arr, expected } of testCases) {
    it(`mostWaterB(${JSON.stringify(arr)}) === ${expected}`, () => {
      assert.strictEqual(mostWaterB(arr), expected)
    })
  }
})
