import assert from 'assert'
import { sumEffortA, sumEffortB } from './sumEffort.js'
import taskTree from '../data.json' assert { type: 'json' }

describe('sumEffortA', () => {
  it('returns the correct total effort', () => {
    assert.strictEqual(sumEffortA(taskTree), 100)
  })
})

describe('sumEffortB', () => {
  it('returns the correct total effort', () => {
    assert.strictEqual(sumEffortB(taskTree), 100)
  })
})
