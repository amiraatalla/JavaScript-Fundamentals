console.log("Hello guys!!!");
// alert("hi")
console.log(4 + 5)
let fName = "Amira";
console.log(fName);

let lName = "Reda";
console.log(fName + " " + lName);
console.log(fName + lName);
console.log('====================================');
console.log(`${fName} ${lName}`)
console.log('====================================');
console.log(fName, lName);

console.log('====================================');
console.log("my name is", fName, " and my last name is", lName);
console.log("my name is " + fName + " and my last name is " + lName);
console.log(`my name is ${fName} and my last name is ${lName}`);

console.log('====================================');
fName = "mona";
console.log(fName, lName);
let sisName = "amira";
console.log(sisName, lName);

var age = 12;
console.log(age);

const student = "aisha";
console.log(student);
// student = "walaa";
// console.log(student);
/*ghgh
kkll
ll;
*/
console.log('====================================');
console.log(typeof (student));
console.log('====================================');
// age = prompt('How old are you?', 23);
// console.log('====================================');
// console.log(age);
// console.log('====================================');
// alert(`You are ${age} years old!`); 
// let isBoss = confirm("Are you the boss?");
// if (isBoss) {
//     alert( "You are the boss" );

// }else{
//     alert( "You are not the boss" );

// }

let i = 6;
while (i < 5) {
    console.log(i);
    i += 2;
}

let x = 7;
do {
    console.log(x);
    x += 2;
} while (x < 5);

for (let y = 0; y < 3; y += 2) { // shows 0, then 1, then 2
    console.log(y);
}

// let a = prompt("Enter you size?",);
// console.log('====================================');
// console.log(typeof (a));
// console.log('====================================');
// switch (parseInt(a)) { //casting
//     case 3: //if(a==3)
//         alert('Too small');
//         break;
//     case 4:
//         alert('Exactly!');
//         alert('ok!');
//         break;
//     case 5:
//     case 6:
//     case 7:
//         alert('Too big');
//         break;
//     default:
//         alert("I don't know such values");
// }
// console.log(typeof (parseInt(a)));

// casting
age = '12';
console.log(age, typeof (age));
let newAge = parseInt(age);
console.log(newAge, typeof (newAge));
let t = 13;
console.log(t, typeof (t))

let n = t.toString();
console.log(n, typeof (n))
console.log('====================================');
newAge = 23.8754212;
console.log(newAge, newAge.toFixed(3));
console.log('====================================');


let colors = ["red", "green", "blue"];
console.log('====================================');


console.log(colors[1]);
console.log('====================================');
let students = {
    name: "amira",
    age: 13
}
console.log('====================================');
console.log(students.name);
console.log('====================================');


//foreach , function 