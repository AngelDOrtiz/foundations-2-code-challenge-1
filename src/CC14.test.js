import { replaceZeros } from '../src/CC14.js';

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });

  const zeros = [0, 0, 0, 0];

  test('replaces 0 with zero', () => {
    expect(replaceZeros(zeros)).toEqual(['zero', 'zero', 'zero', 'zero']);
  });
});