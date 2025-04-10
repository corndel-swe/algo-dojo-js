import Benchmark from 'benchmark'
import { maxEffortA, maxEffortB } from './maxEffort.js'
import taskTree from '../data.json' assert { type: 'json' }

const suite = new Benchmark.Suite()

suite
  .add('maxEffortA (iterative)', () => {
    maxEffortA(taskTree)
  })
  .add('maxEffortB (recursive)', () => {
    maxEffortB(taskTree)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
