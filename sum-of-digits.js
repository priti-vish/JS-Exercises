const prompt = require("prompt-sync")();

let numberOfDigit=Number(prompt("Enter nummber: "))
let sumOfDigit=0

//4321 => 4+3+2+1

while(numberOfDigit>0){
    sumOfDigit += (numberOfDigit%10)
    numberOfDigit = Math.floor(numberOfDigit/10)
}

console.log(sumOfDigit);

