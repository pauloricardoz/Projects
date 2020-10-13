async function grande() {
  await 
  for (let index = 0; index < 10000000000; index++) {
      
  }
  console.log('Grande')
}
function pequeno() {
  for (let index = 0; index < 100; index++) {
      
  }
  console.log('pequeno')
}
let i = 0;
while (i<100)
{
  setTiout(()=>pequeno(),10);
  setTimeout(()=>grande(),10);
  
  i++;
}
