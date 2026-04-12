let n = 8;
let sumOfNaturalNum = 0

if (isNaN(n) || n <= 0) {
    console.log("Enter proper number")
} else {

    for (let i = 0; i <= n; i++) {
        sumOfNaturalNum += i
    }
    console.log(sumOfNaturalNum)
}


//Using formula of Sum of natural nos is s = n(n+1)/2

function sumOfNaturalNumber(n) {
    if (typeof(n) !=='number' || Number.isNaN(n) || n <= 0) {
        return null
    }
        return n * (n + 1) / 2
}
console.log(sumOfNaturalNumber(8))
