export function toLastNames(people) {
  return people.map(p => `${p.firstName} ${p.lastName}`);
}

export function addValues(numbers) {
  const reduce = numbers.reduce((n1, n2) => n1 + n2, 0);
  const answer = [];
  answer.push(reduce);
  return answer;
}

export function addPurchases(objects) {
  const price = objects.reduce((o1, o2) => o1.purchasePrice + o2.purchasePrice, 0);
  
  const answer = Number(price);
  
  
  return answer;
}