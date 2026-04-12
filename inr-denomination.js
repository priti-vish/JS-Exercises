const prompt=require("prompt-sync")();

let cash=Number(prompt("Enter the cash require for INR Denomination : "))
let notes=0
let noteCash=Math.floor(cash)

//Optimized logic using loop

if(isNaN(cash) || cash<=0){
    console.log("Enter valid amount for cash denomination.");
    
}else{
    const denominationNotes = [500,200,100,50,20,10,5,1];

    for(let i=0; i<(denominationNotes.length);i++){
        notes=Math.floor(noteCash/(denominationNotes[i]))
        noteCash=noteCash%denominationNotes[i]
        if(notes>0){

            console.log(`${denominationNotes[i]} ${denominationNotes[i]===1?"note : ":"notes : "} ${notes}`);
        }
    }
}


// if(isNaN(cash) || cash<=0){
//     console.log("Enter valid amount for cash denomination.");
    
// }else{
//     if(noteCash>=500){
//         notes=Math.floor(noteCash/500)
//         noteCash=noteCash%500
//         console.log("500 notes: "+ notes)
//     }
//     if(noteCash>=200){
//         notes=Math.floor(noteCash/200)
//         noteCash=noteCash%200
//         console.log("200 notes: "+ notes)
//     }
//     if(noteCash>=100){
//         notes=Math.floor(noteCash/100)
//         noteCash=noteCash%100
//         console.log("100 notes: "+ notes)
//     }
//     if(noteCash>=50){
//         notes=Math.floor(noteCash/50)
//         noteCash=noteCash%50
//         console.log("50 notes: "+ notes)
//     }
//     if(noteCash>=20){
//         notes=Math.floor(noteCash/20)
//         noteCash=noteCash%20
//         console.log("20 notes: "+ notes)
//     }
//     if(noteCash>=10){
//         notes=Math.floor(noteCash/10)
//         noteCash=noteCash%10
//         console.log("10 notes: "+ notes)
//     }
//     if(noteCash>=5){
//         notes=Math.floor(noteCash/5)
//         noteCash=noteCash%5
//         console.log("5 notes: "+ notes)
//     }
//     if(noteCash>=2){
//         notes=Math.floor(noteCash/2)
//         noteCash=noteCash%2
//         console.log("2 notes: "+ notes)
//     }
//     if(noteCash===1){
//         console.log("1 notes: "+ noteCash)
//     }
// }

