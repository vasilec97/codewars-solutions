function findOdd(A) {
  const map = A.reduce((acc, val) => {
    acc[val] = acc[val] + 1 || 1
    return acc
  }, {})
  
  return Number(Object.keys(map).find((key) => map[key] % 2 != 0))
}