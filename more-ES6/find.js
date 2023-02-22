const numbers = [10, 15, 45, 77, 45,, 55, 98, 45, 45,10, 11,2 ,12];
const fives = numbers.find(n  => n % 5 === 0);
console.log(fives);

const products = [
    {id:1, name:'mobile', price: 12500},
    {id:2, name:'Laptop', price: 55000},
    {id:3, name:'Watch', price: 25000},
]
const cheap = products.find(n => n.price < 40000)
console.log(cheap);