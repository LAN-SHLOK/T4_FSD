// Syntax
//  function name = 
//  (Param1,Param2,Paaram3,...,ParamN)

//  => Expression

//  (I)
const add=(a,b)=>a+b;
console.log(add(2,5));
// (II)
const square = x=>x*x;
console.log(square(2));
// (III)
const sayHello =()=>
    "Hello";
console.log(sayHello());
// (IV)
const multiply=(a,b)=>
{
    const result = a*b;
    return result;
}
console.log(multiply(1,19))
// (V)
const newFun =
p =>
    `val = ${p}`;
console.log(newFun(10))


// Rest Parameters 
// function functionname(a,b,...n)//

function num(a,b,...c)
{
    console.log(a);
    console.log(b);
    console.log(c);
}
num(10,20,30,40,50)

// function fun(...args){ console.log(args);}
function fun(...args){
    console.log(args)
}
fun(10,20,30,40)

function example(a,b,...c){
    console.log(`${a}${b}`)
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf("PQR"));
    console.log(c.indexOf("ABC"));
    console.log(c.indexOf("XYZ"));
}
example('ABC','XYZ','PQR','MNO','STU')