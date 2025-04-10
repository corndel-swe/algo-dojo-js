export function maxEffortA(root) {
  let maxEffort = root.effort
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    if (node.effort > maxEffort) {
      maxEffort = node.effort
    }

    for (const child of node.children) {
      stack.push(child)
    }
  }

  return maxEffort
}

export function maxEffortB(node) {
  let maxEffort = node.effort
  for (const child of node.children) {
    const childMax = maxEffortB(child)
    if (childMax > maxEffort) maxEffort = childMax
  }
  return maxEffort
}
