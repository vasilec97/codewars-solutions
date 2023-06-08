function solution(start, finish) {
  const diff = finish - start
  
  return Math.floor(diff / 3) + diff % 3
}