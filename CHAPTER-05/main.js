//Ques: 01
//ADDITION

let num1 = 3;
let num2 = 5;

let result = num1 + num2;
console.log(result);

//Ques: 02
//SUBTRACTION

let subtraction = num1 - num2;
console.log(subtraction);

//multiplication

let multiplication = num1 * num2;
console.log(multiplication);

//division

let division = num1 / num2;
console.log(division);

//modulus
let modulus = num1 % num2;
console.log(modulus);

//Ques: 03

let val;
document.write(` Value after variable declaration is ${val}. <br> `);
val = 5;
document.write("Initial value: " + val + "." + "<br>");
val++;
document.write(`Value after increment is: ${val}.<br>`);
val += 7;
document.write(` Value after addition is: ${val}. <br>`);
val--;
document.write(`Value after decrement is ${val}. <br>`);

let divide = val % 3;
document.write(`The reminder is: ${divide}<br>`);

//Ques: 04
let movieTicket = 600
let totalPrice = movieTicket * 5
document.write(`Total cost to buy 5 tickets to a movie is ${totalPrice}PKR <br>`)

//Ques: 05
document.write("<h1> table of 4 </h1>")
for(let i = 1; i <= 10; i++ ){
    document.write(`4 x ${i} = ${4 * i}<br>`)
}

//Ques: 06
// a. Store a Celsius temperature into a variable
let celsiusTemp = 30;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”
let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write( "<br>"+ celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "<br>");

// c. Now store a Fahrenheit temperature into a variable
fahrenheitTemp = 86;

// d. Convert it to Celsius & output “NNoF is NNoC”
celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp.toFixed(2) + "°C"+ "<br>");


//Ques: 07
let priceOfItem1 = 650;
let priceOfItem2 = 100;
let quantityOfItem1 = 3;
let quantityOfItem2 = 7;
let shippingCharges = 100;
let total = priceOfItem1 * quantityOfItem1 + priceOfItem2 * quantityOfItem2 + shippingCharges;

document.write("<h1>Shopping Cart </h1>" + '<br>')
document.write(`<br> Price of item 1 is ${priceOfItem1}.<br>`);
document.write(`Quantity of item i is ${quantityOfItem1}.<br>`);
document.write(`Price of item 2 is ${priceOfItem2} .<br>`);
document.write(`Quantity of item 2 is ${quantityOfItem2}. <br>`);
document.write(`Shipping charges is ${shippingCharges}.<br>`)
document.write(` <br>Total cost of your order is ${total}.`)


//Ques: 08
let totalMarks = 980;
let obtainMarks = 804;
let percentage = (obtainMarks / totalMarks) * 100;

document.write("<h1>Mark Sheet</h1>." + "<br>")
document.write(`<br> Total marks : ${totalMarks}. <br>`);
document.write(`Obtained marks : ${obtainMarks}.<br>`);
document.write(`Percentage : ${percentage}%<br>`)

//Ques: 09
let usDollar = 10;
let saudiRiyal = 25;
let pakistaniRupeesDollar = 104.80;
let pakistaniRupeesRiyal = 28;

let totalDollar = usDollar * pakistaniRupeesDollar;
let totalRiyal = saudiRiyal * pakistaniRupeesRiyal;
let totalAmount = totalDollar + totalRiyal;

document.write(` <br>Total Currency in PKR : ${totalAmount}<br>`)

//Ques: 10

let num = 8;
let Result = ((num + 5) * 10) / 2;
document.write("<br>"+ "The result is: " + result);

//Ques: 11
document.write(`<br> <h1>Age Calculator</h1> <br>`)
let currYear = 2024;
let birthYear = 2004;
let age = 2024 - 2004;
document.write(`Current year : ${currYear}<br>`);
document.write(`Birth year : ${birthYear} <br>`);
document.write(`Age : ${age}<br>`)

//Ques: 12

let radius = 5; 

let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer</h1>")
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);


//Ques: 13


let favoriteSnack = "chocolates";

let currentAge = 15; 


let maxAge = 65; 

let amountPerDay = 3; 
let yearsRemaining = maxAge - currentAge;
let totalSnacks = yearsRemaining * 365 * amountPerDay;

document.write(`<h1>The life supply Calculator</h1>`)
document.write("<br>"+"You will need " + totalSnacks + " " + favoriteSnack + "s to last you until the ripe old age of " + maxAge + ".");
