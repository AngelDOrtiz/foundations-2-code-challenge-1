import { toLastNames, addValues, addPurchases } from './CC12.js';

test.skip('array into first and last name only', () => {
  const input = [{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }];
  const output = toLastNames(input);
  expect(output).toEqual(['Jane Doe', 'James Bond']);
});



test.skip('reduce to add', () => {
  const input = [1, 2, 3, 4, 5];
  const output = addValues(input);
  expect(output).toEqual([15]);
});

test.skip('reduce to total amount', () => {
  const input = [{ item:'switch', purchasePrice: 399 }, { item:'apple', purchasePrice: 1 }, { item:'barrel', purchasePrice: 50 }];
  const output = addPurchases(input);
  expect(output).toEqual(450);
});
        
// test.skip('', () => {
//      const input =
//      const output = 
//       expect(output).toEqual()
//  });
