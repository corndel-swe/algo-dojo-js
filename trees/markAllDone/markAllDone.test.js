import assert from 'assert'
import { markAllDoneA, markAllDoneB } from './markAllDone.js'
import originalTree from '../data.json' assert { type: 'json' }

// Helper to deep clone and verify all done
function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function allDone(node) {
  if (!node.done) return false
  return node.children.every(allDone)
}

describe('markAllDoneA', () => {
  it('marks all tasks and subtasks as done', () => {
    const tree = clone(originalTree)
    markAllDoneA(tree)
    assert.strictEqual(allDone(tree), true)
  })
})

describe('markAllDoneB', () => {
  it('marks all tasks and subtasks as done', () => {
    const tree = clone(originalTree)
    markAllDoneB(tree)
    assert.strictEqual(allDone(tree), true)
  })
})
