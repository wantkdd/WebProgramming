const cart = [
  { item: '노트북', price: 1200000, quantity: 1 },
  { item: '마우스', price: 35000, quantity: 2 },
  { item: '키보드', price: 89000, quantity: 1 },
];
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
  totalPrice += cart[i].price;
}
console.log(totalPrice);
//Total Price: 1359000
cart.forEach();
//Total Price: 1359000
totalPrice = cart.reduce();
//Total Price: 1359000
const itemTotals = cart.map(console.log('제품별 금액 : $(itemTotals)'));
// 제품별 금액: [
// { item: '노트북', total: 1200000 },
// { item: '마우스', total: 70000 },
// { item: '키보드', total: 89000 }
// ]

const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map();
['ALICE', 'BOB', 'CHARLIE'];
const capitalStartnames = names.map();
['Alice', 'Bob', 'Charlie'];
