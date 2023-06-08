function solution(n){
  if (n === 0 || isNaN(n) || Math.sign(n) === -1) return 0;
  
  let numberArr = [];
  
  for (let i = 1; i < n; i++) {
    if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
      if (!numberArr.includes(i)) {
        numberArr.push(i)
      }
    }
  }
  
  return numberArr.reduce((a, c) => a + c, 0);
}