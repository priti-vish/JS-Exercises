const prompt = require("prompt-sync")();

let number=Number(prompt("Enter nummber: "))
let reverseOfNum=0

//4321 => 1234

while(number>0){
    reverseOfNum = reverseOfNum*10+(number%10)
    number = Math.floor(number/10)
}

console.log(reverseOfNum);