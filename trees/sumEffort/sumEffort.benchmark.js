import Benchmark from 'benchmark'
import { sumEffortA, sumEffortB } from './sumEffort.js'
import taskTree from '../data.json' assert { type: 'json' }

const suite = new Benchmark.Suite()

suite
  .add('sumEffortA (iterative)', () => {
    sumEffortA(taskTree)
  })
  .add('sumEffortB (recursive)', () => {
    sumEffortB(taskTree)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
