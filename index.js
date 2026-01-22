// var f_name = "Muhammad";
// var l_name = "Mutahir";
// var myNumber = 2;

// var fullName = f_name + l_name;
// console.log(fullName);

// var mySPace = "h";

// // console.log(fullName);
// console.log(mySPace.length);

// console.log(f_name);
// console.log(l_name);
// console.log(myNumber);

// var myName = 22;
// var myNumber = "Muhamma

// var myName = "Ali";
// var MYNAME = "Abdullah";
// var myname = "Mutahir";

// console.log(myName);
// console.log(MYNAME);
// console.log(myname);

// var myNum1 = "2";

// var myNum2 = 3;

// var sum = myNum1 * myNum2;
// console.log(sum);

// var num = 2;
// num++;
// num + 2;

// console.lo(num);

// var num = Number(prompt("Enter Yuor Number"));

// if (num % 2 === 0 ){
//     console.log("This Number is Even Number");
// }else{
//     console.log("This Number is ODD Number");
// }

// var num = Number(prompt("Enter Your age"));

// if (num >= 18 ){
//     console.log("Ap vote kr sakte hain");
// }else{
//     console.log("Ap vote nhi kr sakte hain");
// }


// var age = Number(prompt("Enter Your Age"));

// if (age >= 18){
//     console.log("Ap Vote De sakte Hon");
// }else{
//     console.log("Ap Vote Nhi de Sakte!");
// }

// : Number positive, negative ya zero?

// var age = Number(prompt("Enter Your Value"));

// if (age >= 1){
//     console.log("This value is Posiive");
// }else{
//     console.log("This value is Nagitive!");
// }

// var ch = 'a'; 

// var ascii = ch.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     console.log("Ye number hai");
// } 
// else if (ascii >= 65 && ascii <= 90) {
//     console.log("Ye Uppercase Letter hai");
// } 
// else if (ascii >= 97 && ascii <= 122) {
//     console.log("Ye Lowercase Letter hai");
// } 
// else {
//     console.log("Ye na number hai na letter");
// }


// var a = 15;
// var b = 15;

// if (a > b) {
//     console.log("Bara number hai: " + a);
// } 
// else if (b > a) {
//     console.log("Bara number hai: " + b);
// } 
// else {
//     console.log("Dono numbers equal hain");
// }


// var num = 0;

// if (num > 0) {
//     console.log("Number Positive hai");
// } 
// else if (num < 0) {
//     console.log("Number Negative hai");
// } 
// else {
//     console.log("Number Zero hai");
// }

// function isVowel(ch) {
//     ch = ch.toLowerCase();

//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Test
// console.log(isVowel('E')); // true
// console.log(isVowel('z')); // false

// var correctPassword = "abc123";

// var userPassword = prompt("Please enter your password");

// if (userPassword === "" || userPassword === null) {
//     alert("Please enter your password");
// } 
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } 
// else {
   
//     alert("Incorrect password");
// }


var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);

var time = 1900; 

if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
} else {
    console.log("Invalid time");
}