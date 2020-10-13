
function topThreeWords(text) {
  let words = text.split(/\s|\r?\n|\r/gmi);
  words=words.map(el=>el.replace(/[^a-z0-9']|\s+|\r?\n|\r/gmi,'').toLowerCase())
  words=words.filter(el=>el.length>0)
  const count = [];
  words.forEach(el=> {
    if(count.find(ell=>ell.tex===el)===undefined){
      count.push({tex:el,quant:1})
    }else{
      count.find(ell=>ell.tex===el).quant++
    }
  })
  count.sort((a,b)=>a.quant-b.quant||-a.tex+b.tex)
  const saida=[]
    for(let i=0;count.length!==0&&i<3;i++)
      saida.push(count.pop().tex)
  return(saida)
}
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))//, ['e','d','a']) 
console.log(topThreeWords("a a c b b"))//, ['a','b','c'])
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))//,['e','ddd','aa'])
console.log(topThreeWords("  //wont won't won't "))//, ["won't", "wont"])
console.log(topThreeWords("  , e   .. "))//, ["e"])
console.log(topThreeWords("  ...  "))//, [])
console.log(topThreeWords("  '  "))//, [])
console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`))//, ['a','of','on'])