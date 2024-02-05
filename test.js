let arr = [
  { one: 'this is one', two: 'this is two' },
  { one: 1, three: 3 },
  { four: 4, five: 5 },
  { One: 'this is one', three: 5 },
];
let arr2 = ['one', 'One', 'two', 'thee'];

const newArr = arr2.filter(
  (el) => el.toLowerCase().indexOf('one'.toLowerCase()) !== -1,
);

console.log(newArr);
