class Instructor {
    name;
    designation ='Web course instructor'
    team = 'web team'
    location ;
    constructor(name,location){
        this.name = name;
        this.location =location
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(num){
        console.log(`create a quiz for module ${num}`);
    }

}
const ammir = new Instructor('amir','barishal')
ammir.startSupportSession('9.00')
ammir.createQuiz(5)
console.log(ammir);