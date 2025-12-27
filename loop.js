/* ** for ** */
for (let i = 1; i<=5 ; i++){
    console.log(i,end=" ");
}

/* ** while ** */
let i = 2
while(i<=5){
    console.log(i);
    i++;
}

/* ** do...while ** */
let k = 1;
do{
    console.log(k);
    i++
}while(i<=5)

/* ** for...of ** */
// (best for arrray and strings)
const fruits = ["apple","banana","mango"]
for(let fruit of fruits){
    console.log(fruit)
}

/* ** for...in ** */
// (best for objects)
// For Object
let user={
    name:"xyz",
    age:21,
    city:"Ahmedabad"
}
for (let key in user){
    console.log(key+" "+user[key]);
}

// For Array
let name=["A","B","C"]
for(let i in name){
    console.log(i,name[i])
}

