function codes (palavra='') {
  palavra=palavra.split('')
   const saida = palavra.map((e,i,a)=> {
    switch (i) {
        case(0):
          return e.charCodeAt(i)
        case(1):
          return a[a.length-1]
        case(a.length-1):
           return a[a.length-1] =a[1];
        default:
          return a[i];
    }
  })
   return saida.join('');
}
var encryptThis = function(text) {
  const palavras = text.split(" ");
  let temp=''
  if (palavras.length==1)
    return codes(palavras[0])
  
 const saida = palavras.map((e)=> codes(e))
  return saida.join(' ')
}


console.log(encryptThis('A')+'\n'+ "65");
console.log(encryptThis('wise')+'\n'+ "119esi");
console.log('A wise old owl lived in an oak'+'\n'+ encryptThis('A wise old owl lived in an oak')+'\n'+ "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis('The more he saw the less he spoke')+'\n'+ "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
console.log(encryptThis('The less he spoke the more he heard')+'\n'+ "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
console.log(encryptThis('Why can we not all be like that wise old bird')+'\n'+ "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
console.log(encryptThis('Thank you Piotr for all your help')+'\n'+ "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");
