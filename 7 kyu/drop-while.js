function dropWhile(arr, pred) {
  return arr.reduce((acc, val) => !pred(val) || acc.length > 0 ? [...acc, val] : acc, [])
}