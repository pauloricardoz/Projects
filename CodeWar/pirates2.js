function conquerIsland(map) {
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
  let closestMarine = { vector: [], smallDist: 99 };
  let closestUnoccupied = { vector: [], smallDist: 99 };
  const bigger =
    marine.length > unoccupied.length ? marine.length : unoccupied.length;
  for (let i = 0; i < bigger; i++) {
    for (let j = 0; j < pirate.length; j++) {
      if (marine[i] != undefined) {
        closestMarine = updateMin(pirate[j], marine[i], closestMarine);
      }
      if (unoccupied[i] != undefined) {
        closestUnoccupied = updateMin(
          pirate[j],
          unoccupied[i],
          closestUnoccupied
        );
      }
    }
  }
  if (closestUnoccupied.smallDist < 99) {
    if (closestUnoccupied.vector.length == 1)
      closestUnoccupied.vector = closestUnoccupied.vector[0];
    return closestUnoccupied.vector;
  }
  if (closestMarine.smallDist < 99) {
    if (closestMarine.vector.length == 1)
      closestMarine.vector = closestMarine.vector[0];
    return closestMarine.vector;
  }
  return [];
}
function dist(arr1, arr2) {
  return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
}
function updateMin(pirate, compere, hold) {
  const newDist = dist(pirate, compere);
  if (hold.smallDist > newDist) {
    hold.vector = [];
    hold.vector.push([compere[0], compere[1]]);
    hold.smallDist = newDist;
  } else if (hold.smallDist == newDist) {
    if (
      hold.vector.findIndex((vec) => {
        if (vec[0] == compere[0] && vec[1] == compere[1]) return -1;
      }) == -1
    ) {
      hold.vector.push(compere);
      hold.smallDist = newDist;
    }
  }
  return hold;
}

let map = [
  ['~', '~', '~', '~', '~', '~', '~', '~'],
  ['~', '~', 'p', 'm', '~', '~', '~', '~'],
  ['m', '~', 'm', 'p', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~', 'm', '~', '~'],
  ['~', '~', '~', '~', '~', '~', '~', '~'],
  ['~', '~', '~', 'm', '~', '~', '~', '~'],
  ['~', '~', '~', '~', '~', '~', '~', '~'],
];
console.log(conquerIsland(map).toString());
