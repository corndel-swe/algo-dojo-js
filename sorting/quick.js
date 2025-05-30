export function quickSort(arr) {
  if (arr.length <= 1) return arr
  const pivot = arr[arr.length - 1]
  const left = []
  const right = []
  for (let i = 0; i < arr.length - 1; i++) {
    ;(arr[i] < pivot ? left : right).push(arr[i])
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}
