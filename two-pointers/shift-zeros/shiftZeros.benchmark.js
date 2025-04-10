import Benchmark from 'benchmark'
import { shiftZerosA, shiftZerosB } from './shiftZeros.js'
import { randArray } from '../../utils.js'

// Generate a large array with a mix of 0s and numbers
const arr = randArray(100_000, 0, 9) // 0–9 range increases chance of zeros

const suite = new Benchmark.Suite()

suite
  .add('shiftZerosA (naive)', () => {
    shiftZerosA(arr)
  })
  .add('shiftZerosB (two-pointer)', () => {
    shiftZerosB(arr)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
