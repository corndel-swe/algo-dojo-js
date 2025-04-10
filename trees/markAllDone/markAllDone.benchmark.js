import Benchmark from 'benchmark'
import { markAllDoneA, markAllDoneB } from './markAllDone.js'
import taskTree from '../data.json' assert { type: 'json' }

function clone(obj) {
  return structuredClone(obj)
}

const suite = new Benchmark.Suite()

suite
  .add('markAllDoneA (iterative)', () => {
    markAllDoneA(clone(taskTree))
  })
  .add('markAllDoneB (recursive)', () => {
    markAllDoneB(clone(taskTree))
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
