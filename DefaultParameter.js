// Default Parameter
function multiply(a,b)
{
    return a*b;
}
let num1 =multiply(5);
console.log(num1)

let num2 = multiply(5,8);
console.log(num2)

// 

function multiply1(a,b=2)
{
    return a*b;
}
let num3 =multiply1(5);
console.log(num3)

let num4 = multiply1(5,8);
console.log(num4)

// 
function multiply2(a=2,b)
{
    return a*b;
}
let num5 =multiply2(5);
console.log(num5)

let num6 = multiply2(5,8);
console.log(num6)