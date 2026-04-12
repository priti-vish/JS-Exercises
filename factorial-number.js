const prompt= require("prompt-sync")();

let number = Number(prompt("Enter a valid number : "))

if(isNaN(number) || number <0){
    console.log("Enter valid number for factorial calculation.")
}else{
    let factorial = 1

    if(number === 0) {
        factorial = 1
    }else{
        for(let i = 1; i <= number ; i++){
            factorial *= (i)
        }
    }
    console.log(factorial)
}
