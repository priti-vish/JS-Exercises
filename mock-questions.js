
// [] is a truthy value in JavaScript, so ![] becomes false.

// Now the expression becomes [] == false.

// Since we are using loose equality (==), JavaScript performs type coercion.

// [] is first converted to "" (empty string), and then "" is converted to 0.
// false is also converted to 0.

// So it becomes 0 == 0, which is true.

 //   console.log([] == ![])   // output is true


//  function fn(){
//     return ;
//     {name: 'Some'}
//  }

//  console.log(fn());
 //Automatic Semicolon Insertion (ASI)
//  return followed by newline → returns undefined
// This is due to Automatic Semicolon Insertion (ASI)
// Always keep return value on same line when returning objects


//Sum of 2 number should be 30
const arr =[10,12,18,6,4]

function IndexOfArrSumOfAdjacentArray(arr){
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]+arr[i+1] === 39){
            return [i, i+1]
        }
    }
    return null
}
console.log(IndexOfArr(arr));
