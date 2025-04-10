import Benchmark from 'benchmark'
import { countTasksA, countTasksB } from './countTasks.js'
import taskTree from '../data.json' assert { type: 'json' }

const suite = new Benchmark.Suite()

suite
  .add('countTasksA (iterative)', () => {
    countTasksA(taskTree)
  })
  .add('countTasksB (recursive)', () => {
    countTasksB(taskTree)
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
