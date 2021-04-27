export function doubleNumbers(arr) {
  const answer = arr.map(number => number * 2);
  return answer;
}

export function capitalizeNames(arr){
  const lowerCaseNames = arr.map(names => names[0].toUpperCase() + names.slice(1).toLowerCase());


             
  return lowerCaseNames;
}

export function stringItUp(arr){
  return arr.map(number => number.toString());
}

export function namesOnly(arr){
  return arr.map(name => name.name);
}

export function makeStrings(arr){
  return arr.map(x => `${x.name} ${x.age >= 18 ? 'can go to The Matrix' : 'is under age!!'}`);
}

export function readyToPutInTheDOM(arr){
  return arr.map(x => `<h1>${x.name}</h1><h2>${x.age}</h2>`);
}