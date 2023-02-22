const numbers = [12, 56, 87 ,45, 54 ,5];
const half = numbers.map(x => x / 2);
const third = numbers.map(x => x / 3);
console.log(third);

const friends  = ['fahim', 'muzahi','tayeb'];
const firstLetter = friends.map(friend => friend[0]);
const nameLengths = friends.map(f => f.length);
console.log(nameLengths);

// map in object
const products = [
    {id:1, name:'mobile', price: 12500},
    {id:2, name:'Laptop', price: 55000},
    {id:3, name:'Watch', price: 25000},
]
const name = products.map(n => n.name);
console.log(name);