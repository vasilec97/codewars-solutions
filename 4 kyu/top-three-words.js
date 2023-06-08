function topThreeWords(text) {
  let map = new Map()
  
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, word => {
    map.set(word, map.get(word) + 1 || 1)
  })
  
  return [...map].sort((a, b) => b[1] - a[1]).map(val => val[0]).slice(0, 3)
}