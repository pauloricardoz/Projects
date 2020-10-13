const { isNumber } = require('util');

function simple_assembler(...instructions) {
  let variables;
  let index;
  /* return a dictionary with the registers */
  var program = instructions;
  variables = {};
  const operations = { mov, inc, dec, jnz };
  program = instructions
    .toString()
    .split(',')
    .map((a) => a.toString().split(' '));
  index = 0;
  while (index < program.length) {
    switch (program[index][0]) {
      case 'mov':
        const temp = [...program[index]];
        temp.shift();
        variables = operations.mov(program[index][1], program[index][2],variables);
        index++;
        break;
      case 'inc':
        variables = operations.inc(program[index][1],variables);
        index++;
        break;
      case 'dec':
        variables = operations.dec(program[index][1],variables);
        index++;
        break;
      case 'jnz':
        index = operations.jnz(program[index][1], program[index][2],variables,index);
        break;
    }
  }
  return variables;
}
function mov(a, b,variables) {
  if (variables[a] == undefined) variables[a] = 0;
  if ( (b.charCodeAt(0)<97 ||b.charCodeAt(0)>122) == true) {
    variables[a] = parseInt(b);
  } else {
    variables[a] = variables[b];
  } //if{}else{}
  return variables;
}
function inc(a,variables) {
  variables[a]++;
  return variables;
}
function dec(a,variables) {
  variables[a]--;
  return variables;
}
function jnz(a, c,variables,index) {
  let b = parseInt(c);
  if (variables[a] != 0) {
    if (b > 0) {
      index += b;
    } else {
      index += b;
    }
    return index;
  } else {
    return index + 1;
  }
}

console.log(
  simple_assembler(['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a']),
  { a: 1 }
);

console.log(
  simple_assembler(['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2']),
  { a: 0, b: -20 }
);
