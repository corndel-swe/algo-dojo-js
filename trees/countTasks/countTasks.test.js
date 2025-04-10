import assert from 'assert'
import { countTasksA, countTasksB } from './countTasks.js'
import taskTree from '../data.json' assert { type: 'json' }

describe('countTasksA', () => {
  it('returns the correct number of tasks', () => {
    assert.strictEqual(countTasksA(taskTree), 16)
  })
})

describe('countTasksB', () => {
  it('returns the correct number of tasks', () => {
    assert.strictEqual(countTasksB(taskTree), 16)
  })
})
