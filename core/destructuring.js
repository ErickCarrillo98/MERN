// 1.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)
//Predict the output: Tesla, Mercedes


//Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
console.log(otherName);
//Predict the output: error, not stating where the value name is coming from?

// Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);
console.log(hashedPassword);
//Predict the output: 12345, hashedPassword

// Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
console.log([first])
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //12
console.log([third])
console.log(first == second);
console.log(first == third);
//Predict the output: 5, 12 I WAS WRONG, and i consoled to see how and where i was wrong



//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //value
const { secondKey } = lastTest; //[1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; //??

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//Predict: value, [1,5,1,8,3,3], 1, undefined

//actual outcome: value, [1,5,1,8,3,3], 1, 5




//[,willthiswork] WORKS!!


