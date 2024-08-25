//Ques: 01

let name = "ALishba", lastName = "AHmed khan", Gender = "female";

//Ques: 02
//legal variable

let myName = "Alishba";
let $name = "Alishba";
let my_name = "Alishba";
let name1 = "ALishba";
let name$ = "Alishba";

//illegal variable

// let 1name = "alishba";
// let my name = "alishba";
// let my-name = "alishba";
// let @name = "alishba";
// let 2ndname = "alishba" 


//Ques: 03

document.write("<h1> Rules for naming JS variables </h1> ")

let var1 = "number";
let var2 = "$";
let var3 = "_";
let var4 = "letters"
let var5 = "$my_1stVariable"


document.write(`1:  Variable names can only contain <b>${var1} , ${var2} , ${var3}</b> and  <b>${var4} </b>  for example: <b> ${var5}</b>.<br>`)
document.write(`2:  Variable must begin with a <b>${var2} , ${var3}</b> or <b>${var4}</b> for example: <b> $name , _name</b> or <b> name</b>.<br> `)
document.write('3:  variables names are case <b>Sensitive </b>.<br>')
document.write("4:  Variable names should not be JS <b>keywords </b>.")



