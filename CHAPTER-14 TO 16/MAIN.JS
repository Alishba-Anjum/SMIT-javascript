// Ques :01
// let studentNames = [];

// ques :02
// let studentNames = new Array();

// Ques :03
let StringArray = ["alishba", "zainab", "miss"];

// Ques :04
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Ques :05
let booleanArray = [true, false];

// Ques :06
let mixedArray = ["alishba", 7, true];

// Ques:07// Declare and initialize the array
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<ol>");
// document.write("<h1> Qualifications </h1>")
// for (var i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ol>");

// Ques :08
// var studentNames = ["John Doe", "Jane Smith", "Emily Davis"];
// var studentScores = [400, 450, 350]; // Scores out of 500

// // Total marks for each student
// var totalMarks = 500;

// // Display the scores and percentages
// document.write("<h2>Student Scores and Percentages</h2>");
// document.write("<table border='1'>");
// document.write(
//   "<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>"
// );

// for (var i = 0; i < studentNames.length; i++) {
//   var score = studentScores[i];
//   var percentage = (score / totalMarks) * 100;

//   document.write("<tr>");
//   document.write("<td>" + studentNames[i] + "</td>");
//   document.write("<td>" + score + "</td>");
//   document.write("<td>" + percentage.toFixed(2) + "%</td>");
//   document.write("</tr>");
// }

// document.write("</table>");


// Ques :09

// let colorNames = ["green", "purple", "black"];
// console.log(colorNames);

// let beginingColor = colorNames.unshift(prompt("what color you want to add to the beginning of the array."));
// console.log(beginingColor);

// let endColor = colorNames.push(prompt("what color you want to add to the end of the array"));
// console.log(endColor);

// let begining1Color = prompt("what color you want to add to the beginning of the array.");
// let begining2Color = prompt("what color you want to add to the beginning of the array.");

// if(begining1Color && begining2Color){
//     colorNames.unshift(begining1Color , begining2Color)
//     console.log(colorNames);  
// }

// let deleteColor = colorNames.pop();
// console.log(deleteColor);

// let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
// let colorToAdd = prompt("What color do you want to add?");
// if (!isNaN(indexToAdd) && colorToAdd) {
//     colorNames.splice(indexToAdd, 0, colorToAdd);
// }
// console.log("After adding color at specific index:", colorNames);

// // Delete color(s) from a specific index
// let indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));
// let numberToDelete = parseInt(prompt("How many colors do you want to delete?"));
// if (!isNaN(indexToDelete) && !isNaN(numberToDelete)) {
//     colorNames.splice(indexToDelete, numberToDelete);
// }
// console.log("After deleting color(s):", colorNames);


// Ques :10
// let scoreOfStudent = [320,230,480,120];
// scoreOfStudent.sort();
// console.log(scoreOfStudent);


// Ques :11
// let cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
//console.log(cities);

// let selectedCities = cities.slice(1 , 4)
// console.log(selectedCities);

// Ques :12
// let arr = ["this", "is", "my", "Cat"]
// let joinedArray = arr.join(" ");
// console.log(joinedArray);

// Ques: 13
// let device = [];
// device.push("monitor");
// device.unshift("keyboard")
// device.splice(1,0, "mouse","printer")
// console.log(device);

// for (let i = 0; i < device.length; i++) {
//     console.log(device[i]);
// }
// let reversed = device.reverse();
// for (let i = 0; i < device.length; i++) {
//     console.log(reversed[i]);
// }

// ques :14

// let manufacturers = ["options","Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select>');

// for (let i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' +""+ manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }

// document.write('</select>');