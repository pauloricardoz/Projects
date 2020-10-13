function sortReindeer(reindeerNames = []) {
  let names = reindeerNames.map(data => ({
    firstName: data.substr(0, data.lastIndexOf(" ") - 1),
    SecondtName: data.substr(data.lastIndexOf(" "), data.lenght),
    fullName: data
  }));

  names.sort((a, b) => {
    if (a.SecondtName > b.SecondtName) return 1;
    if (a.SecondtName < b.SecondtName) return -1;
    return 0;
  });
  return sortReindeer= names.map(data => data.fullName);
}



let entrada = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus"
]
sortReindeer(entrada);