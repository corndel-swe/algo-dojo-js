import assert from 'assert'
import { maxEffortA, maxEffortB } from './maxEffort.js'
import taskTree from '../data.json' assert { type: 'json' }

describe('maxEffortA', () => {
  it('returns the correct max effort', () => {
    assert.strictEqual(maxEffortA(taskTree), 20)
  })
})

describe('maxEffortB', () => {
  it('returns the correct max effort', () => {
    assert.strictEqual(maxEffortB(taskTree), 20)
  })
})
