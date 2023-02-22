const number = [10, 211, 14, 25, 14];
const makeDouble = num => num * 2;
const double = number.map(makeDouble)
// map er moddei function likhe deoya
const double2 = number.map(x => x * 2)
// sora sori array er upor o map calano jay
const fiveTimes = [12,251,110,14,].map(x => x * 5)
console.log(fiveTimes);