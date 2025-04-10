import assert from 'assert'
import { countCompletedA, countCompletedB } from './countCompleted.js'
import taskTree from '../data.json' assert { type: 'json' }

describe('countCompletedA', () => {
  it('returns the correct number of completed tasks', () => {
    assert.strictEqual(countCompletedA(taskTree), 7)
  })
})

describe('countCompletedB', () => {
  it('returns the correct number of completed tasks', () => {
    assert.strictEqual(countCompletedB(taskTree), 7)
  })
})
