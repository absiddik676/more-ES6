const numbers = [10, 15, 45, 77, 45,, 55, 98, 45, 45,10, 11,2 ,12];
const bigNumbs = numbers.filter(n => n > 20);
const tiny = numbers.filter(n => n < 20);
const even = numbers.filter(e => e % 2  === 0)
// console.log(even);

const products = [
    {id:1, name:'mobile', price: 12500},
    {id:2, name:'Laptop', price: 55000},
    {id:3, name:'Watch', price: 25000},
]
const expansive = products.filter(product => product.price > 12600)
console.log(expansive);