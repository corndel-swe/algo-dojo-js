import Benchmark from 'benchmark'
import { countCompletedA, countCompletedB } from './countCompleted.js'
import taskTree from '../data.json' assert { type: 'json' }

const suite = new Benchmark.Suite()

suite
  .add('countCompletedA (iterative)', () => {
    countCompletedA(taskTree)
  })
  .add('countCompletedB (recursive)', () => {
    countCompletedB(taskTree)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
