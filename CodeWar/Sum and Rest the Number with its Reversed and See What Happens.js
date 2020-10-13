function sumDifRev(n) {
  // Good Luck!
  //  (ab + ba)%(ab-ba)==0
  if (n == 0) return 0;
  let count = 0;
  let a = 11;
  while (count != n) {
    let text = a.toString();
    if (text[text.length - 1] == 9) a++;
    a++;
    let temp = a.toString();
    let b = parseInt(a.toString().split('').reverse().join(''));
    if ((a + b) % Math.abs(b - a) == 0) {
      count++;
    }
  }
  return a;
}

for (let index = 0; index < 62; index++) {
  console.log(sumDifRev(index));
}
