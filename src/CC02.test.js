import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati, ofAge, leastToGreatest, greatestToLeast, lengthSort } from './CC02.js';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('Evens only', () => {
  const input = [3, 6, 8, 2];
  const output = evensOnly(input);
  expect(output).toEqual([6, 8, 2]);
});

test('Five characters or fewer', () => {
  const input = ['by', 'dog', 'wolf', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten']); // assert
});

test('People who belong to the illuminati', () => {
 
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: false },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: false },
    { name: 'Bob Ziroll', member: true }
  ];
 
  const output = peopleWhoBelongToTheIlluminati(input);
  
  expect(output).toEqual([ 
    { name: 'Angelina Jolie', member: true }, 
    { name: 'Paris Hilton', member: true },
    { name: 'Bob Ziroll', member: true } 
  ]);
});

test('Old enough to see The Matrix', () => {
  const input = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }
  ];
  const output = ofAge(input);
  expect(output).toEqual([ 
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 } 
  ]);
});

test('Sorts from least to greatest', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const output = leastToGreatest(input);
  expect(output).toEqual([1, 2, 3, 5, 20, 90]);
});

test('Sorts from greatest to least', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const output = greatestToLeast(input);
  expect(output).toEqual([90, 20, 5, 3, 2, 1]);
});

test('Sorts from shortest string to longest', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const output = lengthSort(input);
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
});