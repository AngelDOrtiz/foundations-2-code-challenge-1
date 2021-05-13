export function sortByChildren(charArray) {
  const answer = charArray.sort((a, b) => {
    const childrenTotal = a.children.length - b.children.length;
    if (childrenTotal !== 0) return childrenTotal;
    return (a.name < b.name);
  });
  return answer;
}

export function containsW(str) {
  if (str.includes('w')) return true;
  return false;
}

export function isNum(input) {
  const reg = /\d/;
  const answer = reg.test(input);
  return answer;
}