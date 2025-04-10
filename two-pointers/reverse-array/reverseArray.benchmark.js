import Benchmark from 'benchmark'
import { reverseArrayA, reverseArrayB } from './reverseArray.js'
import { randArray } from '../../utils.js'

const arr = randArray(100_000)

const suite = new Benchmark.Suite()

suite
  .add('reverseArrayA (naive)', () => {
    reverseArrayA(arr)
  })
  .add('reverseArrayB (two-pointer)', () => {
    reverseArrayB(arr)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
