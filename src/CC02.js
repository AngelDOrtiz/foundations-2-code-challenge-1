export function fiveAndGreaterOnly(array) {
  return array.filter(number => number > 5);

}

export function evensOnly(array) {
  return array.filter(number => number % 2 === 0);
}

export function fiveCharactersOrFewerOnly(array) {
  return array.filter(word => word.length <= 5);
}

export function peopleWhoBelongToTheIlluminati(array) {
  return array.filter(illumi => illumi.member === true);
}

export function ofAge(array) {
  return array.filter(age => age.age >= 18);
}

export function leastToGreatest(array) {
  return array.sort((a, b) => a - b);
}

export function greatestToLeast(array) {
  return array.sort((a, b) => b - a);
}

export function lengthSort(array) {
  return array.sort((a, b) => a.length - b.length);
}