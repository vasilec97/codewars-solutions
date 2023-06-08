function secondSymbol(s, symbol) {
  const firstIdx = s.indexOf(symbol)
  const secondStr = s.slice(firstIdx + 1) || ''
  const secondIdx = secondStr.indexOf(symbol)
  
  if (secondIdx == -1) return -1
  
  return firstIdx + secondIdx + 1
}