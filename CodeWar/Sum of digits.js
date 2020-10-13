function digital_root(n) {
  // ...
  /* //Fatorial
  while (n > 9) {
    console.log((n = calc(n)));
  }
  return n*/
  while (n > 9) {
    let pow = 0;
    while (10 ** pow < n) {
      pow++;
    }
    let counter = 0;
    for (let i = pow - 1; i >= 0; i--) {
      let mult = 10 ** i;
      let Digit = (n - (n % mult)) / mult;

      counter = Digit + counter > 9 ? Digit + counter - 9 : Digit + counter;
      n %= mult;
    }
    n = counter;
  }
  return n;
}
function calcFatorial(n) {
  if (n >= 0 && n < 10) {
    return n;
  } else {
    return calc(n - (n % 10 == 0 ? 10 : n % 10)) + (n % 10 == 0 ? 1 : n % 10);
  }
}

digital_root(456);
