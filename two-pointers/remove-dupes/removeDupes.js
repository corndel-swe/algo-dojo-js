export function removeDupesA(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i])
    }
  }
  return result
}

export function removeDupesB(arr) {
  if (arr.length === 0) return []

  let write = 1
  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[read - 1]) {
      arr[write] = arr[read]
      write++
    }
  }

  return arr.slice(0, write)
}
