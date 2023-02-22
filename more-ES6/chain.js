const users  = [{id:1, name:'abul', job: 'doctor'}]
// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id: 1, name: 'dabul', job:'leader'},
        {id: 2, name: 'babul', job:'leader'}
    ]
}
// console.log(data.data[0].name);

const user = {
    id: 5001,
    name: 'Thomas elva edison',
    address:{
        street : {
            first :'kocuket lane',
            second : 'third floor',
            third: 'right side',
        },
        postOffice : 'cantonment',
        city: 'dhaka',
    }
}
const userFloor = user.address.stret?.third;
console.log(userFloor);