function digitalRoot(n) {
  if (String(n).length == 1) return n
  
  const sum = [...String(n)].reduce((acc, val) => acc += +val, 0)
  return digitalRoot(sum)
}