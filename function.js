// function functionname
// # Function calling invocation
// (Param1,Param2,.....,ParamN)
{
    // function body
}
/*
- Reusability
- function keyword
- same rule as variables for name
- input parameter
- can return using return keyword
- function body inside {} 
*/

function showmsg(a){
    document.writeln("Value is" +a)
}

// function called explicitly from JS code

function add(a,b){
    return a+b;
}
let result = add(2,5);
console.log(result);

// Automatically executed (self invoked)
(function(){
    document.write("Self Invocation");
})();

