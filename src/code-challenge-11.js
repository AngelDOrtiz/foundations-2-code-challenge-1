export function returnTen(str) {
  return str.split('').slice(-10);
}

export function findMax(matrix) {

}

export function totalSum(matrix) {
  let total = 0;
  matrix.map(arr => arr.map(n => total += n));
  return total;
}

export function salesData(hours, data){
  const total = [];
}