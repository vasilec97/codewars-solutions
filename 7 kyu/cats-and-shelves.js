function solution(start, finish) {
  if (start == finish) return 0
  let current = start, trippleCount = 0, trippleValue = start
  
  while (current + 3 <= finish) {
    trippleCount++
    trippleValue += 3
    current += 3
  }
  
  return trippleCount + finish - trippleValue
}