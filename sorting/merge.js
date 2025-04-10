export function mergeSort(arr) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  const merged = []
  while (left.length && right.length) {
    merged.push(left[0] < right[0] ? left.shift() : right.shift())
  }
  return merged.concat(left, right)
}
