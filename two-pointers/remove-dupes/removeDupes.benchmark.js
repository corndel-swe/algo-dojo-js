import Benchmark from 'benchmark'
import { removeDupesA, removeDupesB } from './removeDupes.js'
import { randArray } from '../../utils.js'

const raw = randArray(10_000).sort((a, b) => a - b)

const suite = new Benchmark.Suite()

suite
  .add('removeDupesA (naive)', () => {
    removeDupesA(raw)
  })
  .add('removeDupesB (two-pointer)', () => {
    removeDupesB([...raw])
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
