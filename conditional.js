// Conditional Statements

/* ** if ** */
let loggedin=true;
if (loggedin)
{
    console.log("Welcome")
}

/* ** if..else ** */
let age=18;
if (age>=18){
    console.log("You can vote")
}
else{
    console.log("You have to wait")
}

/* ** if....else if ** */
let marks = 95
 if(marks>90){
    console.log("A")
 }
 else if (marks>70) {
    console.log("B")
 }
 else{
    console.log("Gavaro Padho")
 }

 /* ** switch case ** */
let role = "Kamwala"
switch(role){
    case "admin":
        console.log("Full Access")
        break
    case "editor":
        console.log("edit access")
        break
    case "viewer":
        console.log("read only")
        break
    default:
        console.log("No Access")
        break
}

/* ** Ternary Operator ** */
let Age = 20;
let result = age >=18 ? "adult":"minor"
console.log(result)