const prompt=require("prompt-sync")();

let number =Number(prompt("Enter a number: "))
let tempNumber=number //145

// to check strong no means 145 === 1!+4!+5!


let sumOfFact = 0;
while(tempNumber > 0){
    let fact = 1;
    let n = tempNumber%10
    for(let i=1; i<=n; i++){
        fact*=i
    }
    sumOfFact+=fact
    tempNumber=Math.floor(tempNumber/10)
    
}
if(sumOfFact === number){
    console.log(sumOfFact + " is a strong number")
}else{
    console.log(number + " is not a strong number");
    
}