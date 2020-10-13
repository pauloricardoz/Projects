/* var fs = require('fs');

var readline = require('readline');
 */
const lista = [];
const temp=[];
function loading() {
  //const temp = ['Paulo','Ricardo','Zambelli', 'Taveira'];
  localStorage.setItem('lista',temp)
  const listHtml = document.querySelector('.lista-nomes');
  temp.forEach((el) => {
    const aluno = createElement('div','aluno',el);
    const numero = createElement('div','numero',0);
    const d = createDiv('div', 'line', aluno, numero);
    listHtml.appendChild(d);

  })
}

function createElement (element, className, contente) {
  const d = document.createElement(element);
  d.className = className;
  d.innerHTML = contente;
  return d
}
function createDiv (element, className, ...contente) {
  const d = document.createElement(element);
  d.className = className;
  if(contente.length > 0)
    contente.forEach(el => d.appendChild(el));
  return d
}


//const temp = localStorage.getItem('aluno');
//const arr = Array.from(temp);

window.onload = () => {
  fetch('alunos.txt')
  .then(response=>response.text())
  .then(dados => (dados.split('\n')).forEach(el=>el.length>0?temp.push(el):0))
  .then(()=>loading())

};
