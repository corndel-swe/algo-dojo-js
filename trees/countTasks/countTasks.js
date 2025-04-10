export function countTasksA(root) {
  let count = 0
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    count++

    for (const child of node.children) {
      stack.push(child)
    }
  }

  return count
}

export function countTasksB(node) {
  let count = 1
  for (const child of node.children) {
    count += countTasksB(child)
  }
  return count
}
