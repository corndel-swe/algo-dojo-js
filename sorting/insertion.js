export function insertionSort(arr) {
  const a = [...arr]
  for (let i = 1; i < a.length; i++) {
    let j = i
    while (j > 0 && a[j - 1] > a[j]) {
      ;[a[j], a[j - 1]] = [a[j - 1], a[j]]
      j--
    }
  }
  return a
}
