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
  return array.filter(illumi => illumi.member = true);
}