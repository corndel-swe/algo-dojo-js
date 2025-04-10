export function pairSumA(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true
    }
  }
  return false
}

export function pairSumB(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) return true

    if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return false
}
