const prompt=require("prompt-sync")();

let units = Math.floor(Number(prompt("Enter the units used: "))); //700
let billAmount=0;
let unitsLeft=units
if(isNaN(units) || units<0){
    console.log("Enter valid or proper units utilized");
}else{
    
    if(unitsLeft>400){
        billAmount+=(unitsLeft-400)*13 // 0 += (700-400)*13 // 300*13 //3900
        unitsLeft=400; 
    }
    if(unitsLeft>200){ 
        billAmount+=(unitsLeft-200)*8 //3900 + (400-200)*8 // 200*8 //1600+3900 //   5500
        unitsLeft=200;
    }
    if(unitsLeft>100){
        billAmount+=(unitsLeft-100)*6 //5500 + (100)*6 //5500+600 //6100
        unitsLeft=100;
    }
    if(unitsLeft>0){
        billAmount+=unitsLeft*4
    }
    console.log(`Electricity bill amount for ${units}kWh is Rs.${billAmount}`)
}


