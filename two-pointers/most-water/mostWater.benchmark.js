import Benchmark from 'benchmark'
import { mostWaterA, mostWaterB } from './mostWater.js'
import { randArray } from '../../utils.js'

// Generate a random array of heights
const heights = randArray(10_000, 1, 100)

const suite = new Benchmark.Suite()

suite
  .add('mostWaterA (naive)', () => {
    mostWaterA(heights)
  })
  .add('mostWaterB (two-pointer)', () => {
    mostWaterB(heights)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
