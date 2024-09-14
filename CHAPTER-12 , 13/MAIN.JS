//Ques :01
// let char = prompt("Enter a character:");

// if (!isNaN(char)) {
//     console.log(`${char} is a number.`);
// } else {
//     let asciiCode = char.charCodeAt(0);

//     if (asciiCode >= 65 && asciiCode <= 90) {
//         console.log(`${char} is an uppercase letter.`);
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         console.log(`${char} is a lowercase letter.`);
//     } else {
//         console.log(`${char} is not a number or a letter.`);
//     }
// }
  

// ques :02
// let num1 = parseInt(prompt("Enter the first number:"));
// let num2 = parseInt(prompt("Enter the second number:"));

// if (num1 > num2) {
//     console.log(`${num1} is larger than ${num2}.`);
// } else if (num2 > num1) {
//     console.log(`${num2} is larger than ${num1}.`);
// } else {
//     console.log("Both numbers are equal.");
// }


// Ques :03
// let number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//     console.log(`${number} is a positive number.`);
// } else if (number < 0) {
//     console.log(`${number} is a negative number.`);
// } else {
//     console.log(`${number} is zero.`);
// }


// Ques :04
// var char = 'E';  
// var lowerChar = char.toLowerCase();

// if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Ques: 05
// let correctPassword = "alishba123";
// let userPassword = prompt();

// if(userPassword === ""){
//     console.log("please enter your password");
// }else if(userPassword === correctPassword){
//     console.log("Correct! The password you entered matches the original password.");   
// }else{
//     console.log("Incorrect password");
// }

// Ques: 06
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);  // 


// Ques :07
// let time = 1900;
// if(time >= 0000 && time < 1200){
//   console.log("good morning");
// }else if(time > 1200 && time < 1700){
//     console.log("Good afternoon");
// }else if(time > 1700 && time < 2000){
//     console.log("good evening");
// }else if(time >= 2000 && time <= 2400){
//     console.log("Good night");
// }