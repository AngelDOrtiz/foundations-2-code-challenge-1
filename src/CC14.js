export function replaceZeros(string) {
  return string.map(i => i.replace(new RegExp(/[0]/, 'zero')));
};