
//Post increment & Pre increment
let a =10;
let b =a++;
console.log(a); //next time when we are using a it will be 11 but when we are using b it will be 10 because post increment first assign the value to b then increment the value of a
console.log(b);

let x =20;
let y =++x;
console.log(x); //first value will get increment the assigned to y then it will be 21
console.log(y);

let i =5;
let j =i++ + ++i;
console.log(i); //first i will be 5 then post increment will make it 6 then pre increment will make it 7 and then it will be assigned to j
console.log(j); //5 + 7 = 12

let m = 11 ,  n =22;
let k= m + n+ m++ + n++ +  ++m + ++n;
console.log("m" , m); //first m will be 11 then post increment will make it 12 then pre increment will make it 13
console.log("n" , n); //first n will be 22 then post increment will make it 23 then pre increment will make it 24
console.log("k" , k); //11 + 22 + 11 + 22 + 13 + 24 = 103

let p=true;
p++;
console.log(p); //true is treated as 1 and when we post increment it will become 2

//let q=10++
//console.log(q); //we cannot post increment a number directly it will give us an error because we can only post increment a variable not a number