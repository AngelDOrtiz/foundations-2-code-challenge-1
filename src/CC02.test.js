import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati } from './CC02.js';

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