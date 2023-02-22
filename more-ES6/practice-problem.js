// //  odd number convert in even number using map
// const oddNumbers = [1, 3, 5, 7, 9];
// const evenNumber = oddNumbers.map(even => even + 1);
// console.log(evenNumber);



// // filter divisible by 10 return them using filter its return all element
// const  numbers = [33, 50, 79, 78, 90, 101, 30];
// const divisibleNumberFilter = numbers.filter(num => num % 10 == 0);
// console.log(divisibleNumberFilter);



// // find divisible by 10 return them using find its return matching 1st element

// const  numbers2 = [33, 50, 79, 78, 90, 101, 30];
// const divisibleNumberFind = numbers2.find(num => num % 10 == 0);
// console.log(divisibleNumberFind);



// // do sum using reduce and for loop
// const  number3 = [1, 9, 17, 22 ];
// let sum = 0;
// for(const number of number3){
//     sum += number
// }
// console.log(sum);
// // reduce
// const sum2 = number3.reduce((previous,current) => previous + current , 0)
// console.log(sum2);

// array to get age sum using for loop and reduce

// const peoples = [
//     {name: 'Kakashi', age: 20},
//     {name: 'Rin', age: 15},
//     {name: 'Obito', age: 22},
// ]
// // for loop
// let ageSum = 0;
// for(const people of peoples){
//     const age = people.age;
//     ageSum += age
// }
// console.log(ageSum);
// // reduce
// const ageSum2 = peoples.reduce((previous,current)=> previous + current.age,0);
// console.log(ageSum2);


// access the object value
// 1
// const student =  {
//     name: 'Madara',
//     age: 15
// }
// console.log(student.age);
// 2
let data = {
    location : [
        {
            latitude: '35.45 ,37.8',
            longitude: '98.77 , 58.7',
            city : 'Hyderabad',
            county : 'India',
        }
    ]
}
console.log(data.location[0].city);
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product;
console.log(price);