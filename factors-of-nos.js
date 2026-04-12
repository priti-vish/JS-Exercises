let num = 36;

// Method 1: by half of the number
console.log("----------------Method 1---------------")
for(let i=1; i<=(num/2);i++){
    if(num%i === 0){
        console.log("Factors are ", i)
    }
}
console.log("Factors are ", num)

//Method 2: Another method by sqrt of the num for optomized one
console.log("----------------Method 2---------------")
for(let i=1; i<=Math.floor(Math.sqrt(num));i++){
    let factorsNum =[]
    if(num%i === 0){
        console.log("Factors are ", i)
        if(i !== (num/i)){
            console.log("Factors are ", (num/i))
        }
    }
}


