const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a valid number to check for prime number : "))
let primeCheck=true;

if(isNaN(number) || number <=1 ){
    console.log("Enter valid and proper number and (0 & 1) is not a prime number so dont include it.")
}else{

    if(number===2){
        primeCheck=true;
    }else if(number%2 === 0){
        primeCheck=false
    }else{
        for(let i=3; i <= Math.floor(Math.sqrt(number));i+=2){
            if(number%i === 0){
                primeCheck = false
            }
        }
    }
}
if(primeCheck){
    console.log(number, " is a prime number")
}else{
    console.log(number, " is not a prime number")
}
