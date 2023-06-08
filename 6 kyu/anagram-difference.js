function anagramDifference(w1, w2) {
  let matchesCount = 0;
  let copy2 = w2.split('').join('');

  for (let i = 0; i < w1.length; i++) {
    if (copy2.includes(w1[i])) {
      matchesCount += 1;
      copy2 = copy2.replace(w1[i], '');
    }
  }

  return w1.length + w2.length - (matchesCount * 2);
}