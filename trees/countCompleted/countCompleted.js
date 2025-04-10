export function countCompletedA(root) {
  let count = 0
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    if (node.done) count++

    for (const child of node.children) {
      stack.push(child)
    }
  }

  return count
}

export function countCompletedB(node) {
  let count = node.done ? 1 : 0
  for (const child of node.children) {
    count += countCompletedB(child)
  }
  return count
}
