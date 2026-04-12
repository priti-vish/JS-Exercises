const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter 1st number:"))

//Less nested 

if (!isNaN(num1)) {
    let num2 = Number(prompt("Enter 2nd number:"))
    if (!isNaN(num2)) {
        let operator = (prompt("Operators  >>  + , -, *, /, %  >> "))
        if(operator==="+" || operator==="-" || operator==="*" || operator==="/" || operator==="%"){
            switch (operator) {
                case "+":
                    console.log(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
                    break;
                case "-":
                    console.log(`Subtraction of ${num1} & ${num2} is ${num1 - num2}`);
                    break;
                case "*":
                    console.log(`Multiplication of ${num1} & ${num2} is ${num1 * num2}`);
                    break;
                case "/":
                    (num2 !== 0) ? 
                        console.log(`Division of ${num1} & ${num2} is ${(num1 / num2)}`) 
                        : console.log("Cannot divide by zero.");
                        
                    break;
                case "%":
                    console.log(`Percentange of ${num1} & ${num2} is ${(num1 * num2) / 100}`);
                    break;
                default:
                    console.log(`Sasta Calculator`);

            }
        }else{
            console.log("Enter a operator in operator from the mentioned ones")
        }
    }else{
        console.log("Enter a number in num2")
    }
}else{
    console.log("Enter a number in num1")
}

// if (isNaN(num1)) {
//     console.log("Enter a number in num1")
// } else {

//     let num2 = Number(prompt("Enter 2nd number:"))
//     if (isNaN(num2)) {
//         console.log("Enter a number in num2")
//     } else {

//         let operator = Number(prompt("Operation 1:+ , 2:-, 3:*, 4:/, 5 :%  >> "))

//         if (isNaN(operator)) {
//             console.log("Enter proper mentioned number for operators")
//         } else {
//             switch (operator) {
//                 case 1:
//                     console.log(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
//                     break;
//                 case 2:
//                     console.log(`Subtraction of ${num1} & ${num2} is ${num1 - num2}`);
//                     break;
//                 case 3:
//                     console.log(`Multiplication of ${num1} & ${num2} is ${num1 * num2}`);
//                     break;
//                 case 4:
//                     console.log(`Division of ${num1} & ${num2} is ${num1 / num2}`);
//                     break;
//                 case 5:
//                     console.log(`Percentange of ${num1} & ${num2} is ${(num1 * num2) / 100}`);
//                     break;
//                 default:
//                     console.log(`Sasta Calculator`);

//             }

//         }
//     }
// }

