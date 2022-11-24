let myAge = prompt('Hello Human insert your age here:');
let earlyYears = 2;
let laterYears = myAge - 2;
let firstTwoYearsInDogYears;
let dogsLaterYears;
let myAgeInDogYears;
firstTwoYearsInDogYears = earlyYears * 10.5
dogsLaterYears = laterYears * 4 
myAgeInDogYears = firstTwoYearsInDogYears + dogsLaterYears
//console.log(firstTwoYearsInDogYears)
//console.log(laterYears)
//console.log(dogsLaterYears)
//console.log(myAgeInDogYears)
//console.log(`Hi Human, your age equals to ${myAgeInDogYears} in dog years... An very old doggy :p`)
//document.write(`Well, your age equals to ${myAgeInDogYears} in dog years... An very old doggy :p`)
document.getElementById('resultado').innerHTML = `Well, your age equals to ${myAgeInDogYears} in dog years... A very old doggy :p`