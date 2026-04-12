console.log(Math.round(10.6)); // <0.5 =1 else 0
console.log(Math.ceil(10.1)); // always round up
console.log(Math.floor(10.9)); // always round down
console.log(Math.max(10, 20, 5));  // returns the largest number among the arguments
console.log(Math.min(10, 20, 5));  // returns the smallest number among the arguments
console.log(Math.pow(2, 3)); // returns the value of 2 raised to the power of 3 (2^3 = 8)
console.log(Math.sqrt(16)); // returns the square root of 16 (4)    
console.log(Math.abs(-5)); // returns the absolute value of -5 (5)
console.log(Math.trunc(10.9)); // returns the integer part of 10.9 (10)
console.log(Math.cbrt(27)); // returns the cube root of 27 (3)
console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)

//Random can be used in real case scenario for OTP generation of 4 digit number
console.log(Math.trunc(Math.random()*9999+1000));

//toFixed() return a string i.e after decimal point how many digits you want to show
let num = 10.56789;
console.log(num.toFixed(2));


//Area of rectangle = base * height
let base = 5;
let height = 10;
let areaOfRectangle = base * height;
let perimeterOfRectangle = 2*(base + height);
console.log(areaOfRectangle); 
console.log(perimeterOfRectangle);

//Area of triangle by using Heron's formula
let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;   
let areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(Math.round(areaOfTriangle));

//Circumference of circle = 2 * π * radius
let radius = 5;
let circumferenceOfCircle = 2 * Math.PI * radius;
console.log(Math.round(circumferenceOfCircle));