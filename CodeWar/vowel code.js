function encode(string) {
  let vowel = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (vowel[string[i]] != undefined) {
      string[i] = vowel[string[i]];
    }
  }
  return string.join('');
}
encode.na
function decode(string) {
  let vowel = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (vowel[string[i]] != undefined) {
      string[i] = vowel[string[i]];
    }
  }
  return string.join('');
}

console.log(encode('ahello'));

console.log(decode('1h2ll4'));
