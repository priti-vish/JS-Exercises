const prompt = require("prompt-sync")();
let number=1


do{
    number = Number(prompt("Enter a number to print or  to stop enter 0-zero: "))
    console.log("hello")
}while(number!==0)
