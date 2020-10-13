function change(string = "b") {
  // ..
  let saida = new Array(26).fill(0);
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) - 97 >= 0 && string.charCodeAt(i) - 97 + 26 >= 0) {
      saida[string.charCodeAt(i) - 97] = 1;
    }
  }
  return (saida.slice(0,26).join(''));
}
console.log(change("a     cZ"));