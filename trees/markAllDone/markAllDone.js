export function markAllDoneA(root) {
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    node.done = true
    for (const child of node.children) {
      stack.push(child)
    }
  }
}

export function markAllDoneB(node) {
  node.done = true
  for (const child of node.children) {
    markAllDoneB(child)
  }
}
