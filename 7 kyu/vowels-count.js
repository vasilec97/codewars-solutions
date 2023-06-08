function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return [...str].reduce((acc, val) => vowels.includes(val) ? acc + 1 : acc, 0)
}