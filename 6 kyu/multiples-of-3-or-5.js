function solution(n){
  if (n <= 0 || isNaN(n)) return 0;
  
  return [...new Array(n - 1)].map((_, i) => i + 1).filter(n => n % 3 == 0 || n % 5 === 0).reduce((a, b) => a + b, 0)
}