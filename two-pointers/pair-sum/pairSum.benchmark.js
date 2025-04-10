import Benchmark from 'benchmark'
import { pairSumA, pairSumB } from './pairSum.js'
import { randArray, randInt } from '../../utils.js'

const target = arr => {
  const i = randInt(0, arr.length)
  const j = randInt(0, arr.length)
  return arr[i] + arr[j]
}

const arr = randArray(10_000).sort((x, y) => y - x)

const suite = new Benchmark.Suite()

suite
  .add('pairSumA (naive)', () => {
    pairSumA(arr, target(arr))
  })
  .add('pairSumB (two-pointer)', () => {
    pairSumB(arr, target(arr))
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
