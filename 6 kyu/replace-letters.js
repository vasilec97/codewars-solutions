function replaceLetters(word) {
  const map = {'a': 'z','b': 'e','c': 'e','d': 'e','e': 'd','f': 'i','g': 'i','h': 'i','i': 'h','j': 'o','k': 'o','l': 'o','m': 'o','n': 'o','o': 'n','p': 'u','q': 'u','r': 'u','s': 'u','t': 'u','u': 't','v': 'a','w': 'a','x': 'a','y': 'a','z': 'a'}
  
  return word.split('').map(l => map[l]).join('')
}