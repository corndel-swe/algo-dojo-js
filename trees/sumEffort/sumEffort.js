export function sumEffortA(root) {
  let total = 0
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    total += node.effort

    for (const child of node.children) {
      stack.push(child)
    }
  }

  return total
}

export function sumEffortB(node) {
  let total = node.effort
  for (const child of node.children) {
    total += sumEffortB(child)
  }
  return total
}
