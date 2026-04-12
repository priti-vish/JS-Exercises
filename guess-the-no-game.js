const prompt = require("prompt-sync")();
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
let guessedNum = Number(prompt("Guess a number(1-100): "))
let Attempts = 5
while (guessedNum !== randomNumber && Attempts > 0) {
    
    if (isNaN(guessedNum) || guessedNum < 1) {
        console.log("Enter proper number range from 1-100")
    } else {
        Attempts--
        if (guessedNum > randomNumber) {
            console.log("Too high")
        } else if (guessedNum < randomNumber) {
            console.log("Too low")
        }
        if(Attempts > 0){
            guessedNum = Number(prompt("Guess a number(1-100): "))
        }else{
            console.log("All attempts fail.\n Lives : " + Attempts +" \n You lost :(")
        }
    }

}
if (guessedNum === randomNumber) {
    console.log("Congratulation you won and " + guessedNum + " is correct!!!!")
}