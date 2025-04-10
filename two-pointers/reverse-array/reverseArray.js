export function reverseArrayA(arr) {
  const result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result
}

export function reverseArrayB(arr) {
  const a = [...arr]
  let left = 0
  let right = a.length - 1
  while (left < right) {
    ;[a[left], a[right]] = [a[right], a[left]]
    left++
    right--
  }
  return a
}
