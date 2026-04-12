let amount = Number(prompt("Enter the amount for after discounted final price: "));

let discount=0;


if(isNaN(amount) || (amount<0)){
    console.log("Enter valid amount/price");
}else{
    if(amount>0 && amount<=5000){
        discount=0
    }else if(amount>5000 && amount<=7000){
        discount=5
    }else if(amount>7000 && amount<=9000){
        discount=10
    }else{
        discount=20
    }
    console.log("Final Amount to be paid after discount: "+(amount-(amount*discount/100)))
}

