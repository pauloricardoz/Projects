function conquerIsland(map) {
  //piratey code here
  //rules
  const marine = [];
  const unoccupied = [];
  const pirate = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      switch (map[i][j]) {
        case 'u':
          unoccupied.push([i, j]);
          break;
        case 'm':
          marine.push([i, j]);
          break;
        case 'p':
          pirate.push([i, j]);
          break;
        default:
          break;
      }
    }
  }

  let closestMarine = [];
  let closestUnoccupied = [];
  //let pirate = [0, 0];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      //comparação
      switch (map[i][j]) {
        case 'u':
          if (closestUnoccupied.length == 0) {
            closestUnoccupied.push([i, j]);
          } else if (
            dist(closestUnoccupied[0], pirate) == dist([i, j], pirate)
          ) {
            closestUnoccupied.push([i, j]);
          } else if (
            dist(closestUnoccupied[0], pirate) > dist([i, j], pirate)
          ) {
            closestUnoccupied = [];
            closestUnoccupied[0] = [i, j];
          }

          break;
        case 'm':
          if (closestMarine.length == 0) {
            closestMarine.push([i, j]);
          } else if (dist(closestMarine[0], pirate) > dist([i, j], pirate)) {
            closestMarine[0] = [i, j];
          } else if (dist(closestMarine[0], pirate) == dist([i, j], pirate)) {
            closestMarine.push([i, j]);
          }

          break;
        default:
          break;
      }
    }
  }
  console.log(closestUnoccupied + ' //' + closestMarine);
  // if (closestUnoccupied[0][0] == 11 && closestUnoccupied[0][1] == 11) {
  //   closestUnoccupied = [];
  // }
  if (closestUnoccupied.length != 0) {
    console.log('1');
    return closestUnoccupied;
  }

  // if (closestMarine[0][0] == 10 && closestUnoccupied[0][1] == 10) {
  //   console.log('help');
  //   closestMarine = [];
  // }

  if (closestMarine.length != 0) {
    console.log('2');
    return closestMarine;
  }

  console.log('3');
  return [];
}
function dist(arr1, arr2) {
  return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
}

let map = [
  ['p', '~', '~', 'm', '~', '~', '~', '~'],
  ['~', '~', '~', 'm', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~', '~', '~', 'u'],
  ['~', '~', '~', '~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~', 'u', '~', '~'],
  ['~', '~', '~', '~', '~', '~', 'u', '~'],
  ['~', '~', 'u', '~', '~', '~', '~', 'm'],
];
console.log(conquerIsland(map).toString());
