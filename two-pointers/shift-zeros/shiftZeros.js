export function shiftZerosA(arr) {
  const nonZeros = []
  const zeros = []

  for (const n of arr) {
    if (n === 0) zeros.push(0)
    else nonZeros.push(n)
  }

  return nonZeros.concat(zeros)
}

export function shiftZerosB(arr) {
  const a = [...arr]
  let insertPos = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      a[insertPos++] = a[i]
    }
  }

  while (insertPos < a.length) {
    a[insertPos++] = 0
  }

  return a
}
