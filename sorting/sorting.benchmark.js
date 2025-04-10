import Benchmark from 'benchmark'
import { bubbleSort } from './bubble.js'
import { insertionSort } from './insertion.js'
import { mergeSort } from './merge.js'
import { quickSort } from './quick.js'
import { randArray } from '../utils.js'

const arr = randArray(10_000)

const suite = new Benchmark.Suite()

suite
  .add('Bubble Sort', () => {
    bubbleSort([...arr])
  })
  .add('Insertion Sort', () => {
    insertionSort([...arr])
  })
  .add('Merge Sort', () => {
    mergeSort([...arr])
  })
  .add('Quick Sort', () => {
    quickSort([...arr])
  })
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .run({ async: true })
