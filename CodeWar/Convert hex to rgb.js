function hexStringToRGB(hexString) {
  /*
  let unidade = hexString.toUpperCase().substr(1); //.split('');
  let convert = [];
  //unidade.shift();
  let rgb = { r: 0, g: 0, b: 0 };
  for (let i = 0; i < unidade.length; i++) {
    if (parseInt(unidade.charCodeAt(i)) > 64) {
      convert[i] = -55 + unidade.charCodeAt(i);
      console.log(convert[i]);
    } else {
      convert[i] = parseInt(unidade[i], 10);
    }
  }

  rgb.r = convert[0] * 16 + convert[1];
  rgb.g = convert[2] * 16 + convert[3];
  rgb.b = convert[4] * 16 + convert[5];
  return rgb;*/
  let rgb = { r: 0, g: 0, b: 0 };
  for (let i = 1; i < hexString.length; i += 2) {
    console.log(parseInt(hexString[i] + hexString[i + 1], 16));
    console.log(Object.keys(rgb)[0]);
  }
  Object.keys(rgb);
}

console.log(hexStringToRGB('#FF9933')); // {r:255, g:153, b:51}
