// Array methods
/*
 (i) Push
 (ii) pop
 (iii) Map
 (iv) Filter
 (v) forEach
 (vi) includes
(vii) find
*/

//Object
const course ={
    Name:"Computer Engineering",
    Semester:"SEM-3",
    Total_Subject : 4
}
console.log(course["Name"])

//Array

// ** Push **
let flower = ["rose","lily"]
flower.push("lotus")
console.log(flower)

// ** Pop **
let number =[1,2,4,56];
let removed = number.pop();
console.log(removed);
console.log(number);

// ** Map **
let nums = [1,2,3,4];
let squares= nums.map(num=> num * num);
console.log(nums)
console.log(squares)

// ** Filter **
let ages = [12,18,20];
adult=ages.filter(ages=>ages>=18)
console.log(adult)

// ** forEach **
let names = ["ABC","XYZ","PQR"];
names.forEach(name => {console.log("hello",name)});

// ** includes **
let colors = ["red","green","blue"]
console.log(colors.includes("yellow"))

// ** find **
let users = [
    {
        id :1,name:"XYZ"
    },
    {
        id : 2,name:"PQR"
    }
]

let user = users.find(u => u.id===2)
console.log(user)