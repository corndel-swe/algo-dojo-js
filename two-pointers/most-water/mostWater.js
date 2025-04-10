export function mostWaterA(heights) {
  let max = 0
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const area = (j - i) * Math.min(heights[i], heights[j])
      if (area > max) max = area
    }
  }
  return max
}

export function mostWaterB(heights) {
  let left = 0
  let right = heights.length - 1
  let max = 0

  while (left < right) {
    const area = (right - left) * Math.min(heights[left], heights[right])
    max = Math.max(max, area)

    if (heights[left] < heights[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}
