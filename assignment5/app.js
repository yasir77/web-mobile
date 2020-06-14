// =========================Chapter 1===========================
// // Task 1
// alert("Welcome");
// // Task2
// alert("Error! Please enter a valid password");
// // Task3
// alert("Welcome to JS Land...\nHappy Coding!");
// // Task 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");
// // Task 5
// console.log("Hello... I can run JS through my web browser's console");
// // Task 6
// // Done
// // Task 7
// // Done

// =========================Chapter 2===========================
// // Task 1
// var userName;
// // Task 2
// var myName = "Muhammad Yasir";
// // Task 3
// var message;
// message = "Hello World";
// alert(message);
// // Task 4
// var name = "Yasir";
// var age = 24;
// var course = "Certified Mobile Apllication Development";
// alert(name);
// alert(age);
// alert(course);
// // Task 5
// var food = "PIZZA";
// alert(food+"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1));
// // Task 6
// var email = "yasirfsd1@gmail.com";
// alert("My email address is"+" "+email);
// // Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book "+book);
// // Task 8
// document.getElementById("text").innerHTML="<p>Yah! I can write HTML content through JavaScript</p>";
// // Task 9
// var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);

// =========================Chapter 3===========================
// // Task 1
// var age = 24;
// alert("I am "+age+" year old");
// // Task 2
// var visit = 14;
// alert("You have visited this website "+visit+" times");
// // Task 3
// var birthYear = "1995";
// document.getElementById("text").innerHTML="<p>My birth year is "+birthYear+"</p><p>Data type of any declared variable is number</p>";
// // Task 4
// var name = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.getElementById("text").innerHTML = "<p>"+name+" ordered "+quantity+" "+productTitle+" on XYZ Clothing store</p>";


// =========================Chapter 4===========================
// Task 1
// var a,b,c;

// Task 2  
// var a,b,c,d,e;
// var for,1f,find Number, @average,product#;

// Task3
// document.getElementById("text").innerHTML = "<h1>Rules for naming JS variables</h1><p>Variable names can only contain numbers, letters, $ and _ . For example $my_1stVariable</p><p>Variables must begin with a letter, $ or_ . For example $name, _name or name</p><p>Variable names are case sensitive</p><p>Variable names should not be JS Keywords</p>";


// =========================Chapter 5===========================
// Task 1
// var a = 3;
// var b = 5;
// var sum = a+b;
// document.getElementById("text").innerHTML = "<p>Sum of "+a+" and "+b+" is "+sum+"</p>";

// Task 2
// var a=3,b=5;
// var sub = b-a;
// var mul = a*b;
// var div = b/a;
// document.getElementById("text").innerHTML = "<p>Subtraction of "+a+" and "+b+" is "+sub+"</p><p>Multiplication of "+a+" and "+b+" is "+mul+"</p><p>Division of "+a+" and "+b+" is "+div+"</p>";

// Task 3
// var a;
// document.getElementById("text").innerHTML = "<p>Value after variable declaration is: "+a+"</p>";
// a = 5;
// document.getElementById("text").innerHTML += "<p>Value after variable declaration is: "+a+"</p>";
// a++;
// document.getElementById("text").innerHTML += "<p>Value after increment is: "+a+"</p>";
// a += 7;
// document.getElementById("text").innerHTML += "<p>Value after addition is: "+a+"</p>";
// a--;
// document.getElementById("text").innerHTML += "<p>Value after decrement is: "+a+"</p>";
// document.getElementById("text").innerHTML += "<p>Remainder is: "+a%3+"</p>";

// Task 4
// var cost = 600;
// document.getElementById("text").innerHTML = "<h1>Total cost to buy 5 tickets to a movie is "+cost*5+"PKR</h1>";

// Task 5
// document.getElementById("text").innerHTML = "<h1>Table of 4</h1>";
// for (var i =1; i <= 10; i++) {
// document.getElementById("text").innerHTML += "<h4>4x"+i+"="+4*i+"</h4>";
// }

// Task 6
// var tmpC = 25;
// document.getElementById("text").innerHTML = "<h1>"+tmpC+"<sup>o</sup>C is "+((tmpC*9/5)+32)+"<sup>o</sup>F</h1>";
// var tmpF = 70;
// document.getElementById("text").innerHTML += "<h1>"+tmpF+"<sup>o</sup>F is "+((tmpF-32)*5/9)+"<sup>o</sup>C</h1>";

// Task 7
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// document.getElementById("text").innerHTML = "<h1>Shopping Cart</h1>";
// document.getElementById("text").innerHTML += "<p>Price of Item 1 is "+priceItem1+"</p>";
// document.getElementById("text").innerHTML += "<p>Quantity of Item 1 is "+quantityItem1+"</p>";
// document.getElementById("text").innerHTML += "<p>Price of Item 2 is "+priceItem2+"</p>";
// document.getElementById("text").innerHTML += "<p>Quantity of Item 2 is "+quantityItem2+"</p>";
// document.getElementById("text").innerHTML += "<p>Shipping Charges "+shippingCharges+"</p>";

// Task 8
// var totalMarks = 980,obtainedMarks = 804;
// document.getElementById("text").innerHTML = "<h1>Marks Sheet</h1>";
// document.getElementById("text").innerHTML += "<h3>Total Marks: "+totalMarks+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Obtained Marks: "+obtainedMarks+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Percentage: "+obtainedMarks/totalMarks*100+"%</h3>";

// Task 9
// document.getElementById("text").innerHTML = "<h1>Currency in PKR</h1>";
// document.getElementById("text").innerHTML += "<h3>Total Currency in PKR: "+(10*104.80+25*28)+"</h3>";

// Task 10
// var a = 5;
// result = ((a+5)*10)/2;
// alert(result);

// Task 11
// var currentYear = 2020, birthYear = 1992;
// document.getElementById("text").innerHTML = "<h1>Age Calculator</h1>";
// document.getElementById("text").innerHTML += "<h3>Current Year: "+currentYear+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Birth Year: "+birthYear+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Your age is either: "+(currentYear-birthYear)+" or "+(currentYear-birthYear+1)+"</h3>";

// Task 12
// var radius = 20;
// document.getElementById("text").innerHTML = "<h1>The Geometrizer</h1>";
// document.getElementById("text").innerHTML += "<h3>Radius of a circle: "+radius+"</h3>";
// document.getElementById("text").innerHTML += "<h3>The circumference is: "+(2*3.142*radius)+"</h3>";
// document.getElementById("text").innerHTML += "<h3>The area is: "+(3.142*radius*radius)+"</h3>";

// Task 13
// var favSnack = "choclate chip", currentAge = 15, maximumAge = 65, amountPerDay = 3;
// document.getElementById("text").innerHTML = "<h1>The Lifetime Supply Calculator</h1>";
// document.getElementById("text").innerHTML += "<h3>Favourite Snack: "+favSnack+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Current Age: "+currentAge+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Estimated Maximum Age: "+maximumAge+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Amount of Snack per day: "+amountPerDay+"</h3>";
// document.getElementById("text").innerHTML += "<h3>You will need "+(((maximumAge-currentAge)*365)*3)+" "+favSnack+" to last you until the ripe old age of "+maximumAge+"</h3>";


// =========================Chapter # 6-9===========================

// Task 1
// var a = 10;
// document.getElementById("text").innerHTML = "<h3>Result:</h3>";
// document.getElementById("text").innerHTML += "<h3>The value of a is: "+a+"</h3><h3>..................................</h3>";
// document.getElementById("text").innerHTML += "<h3>The value of ++a is: "+(++a)+"</h3><h3>Now the value of a is: "+a+"</h3>";
// document.getElementById("text").innerHTML += "<h3>The value of a++ is: "+(a++)+"</h3><h3>Now the value of a is: "+a+"</h3>";
// document.getElementById("text").innerHTML += "<h3>The value of --a is: "+(--a)+"</h3><h3>Now the value of a is: "+a+"</h3>";
// document.getElementById("text").innerHTML += "<h3>The value of a-- is: "+(a--)+"</h3><h3>Now the value of a is: "+a+"</h3>";

// Task 2
// var a=2, b=1;
// var result = (--a) - (--b) + (++b) + (b--);     // 1-0+1+1 = 3
// document.getElementById("text").innerHTML += "<h3>The value of a is: "+a+"</h3>";
// document.getElementById("text").innerHTML += "<h3>The value of b is: "+b+"</h3>";
// document.getElementById("text").innerHTML += "<h3>The value of result is: "+result+"</h3>";

// Task 3
// var userName = prompt("Enter your name.");
// alert("Welcome "+userName+" !");

// Task 5
// var num = prompt("Enter any number:",5);
// document.getElementById("text").innerHTML = "<h1>Table of "+num+"</h1>";
// for (var i =1; i <= 10; i++) {
// document.getElementById("text").innerHTML += "<h4>"+num+"x"+i+"="+num*i+"</h4>";
// }

// Task 6                                           (Not able solved)
// var subject1 = prompt("Enter 1st Subject :");
// var subject2 = prompt("Enter 2nd Subject :");
// var subject3 = prompt("Enter 3rd Subject :");
// var subjectMarks = 100;
// var totalMarks = subjectMarks*3;
// var subject1Marks = prompt("Enter obtained marks for "+subject1+":");
// var subject2Marks = prompt("Enter obtained marks for "+subject2+":");                    
// var subject3Marks = prompt("Enter obtained marks for "+subject3+":");
// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// var percentage =  (totalObtainedMarks/totalMarks)*100;
// var html = "<tabel class='result'></table>";
// document.getElementById("text").innerHTML = html;
// document.getElementById("text").innerHTML+= "<tr></tr>";


// =========================Chapter # 9-11===========================
// Task 1
// var city = prompt("Enter City Name:");
// if (city=="Karachi") {
//     alert("Welcome to the city of lights");
// }

// Task 2
// var gender = prompt("Gender:");
// if (gender=="male") {
//         alert("Good Morning Sir");
//     }
// else if(gender=="female"){
//     alert("Good Morning Ma’am");
// }

// Task 3
// var color = prompt("Enter Color:");
// if (color=="Red") {
//         alert("Must Stop");
//     }
// else if(color=="Yellow"){
//     alert("Ready to Move");
// }
// else if(color=="Green"){
//     alert("Move Now");
// }

// Task 4
// var remainingFuel = prompt("Enter Remaining Fuel");
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// Task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); //alert displayed
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); //alert not displayed
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true"); //alert not displayed
// }
// if (c === 13){
// alert("condition 2 is true"); //alert displayed
// }
// if (++c < 14){
// alert("condition 3 is true"); //alert not displayed
// }
// if(c === 14){
// alert("condition 4 is true"); //alert displayed
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals"); // alert displayed
// }

// if (true) {
//     alert("True"); //alert displayed
// }
// if (false) {
//     alert("False"); //alert not displayed
// }

// if("car" < "cat"){
//     alert("car is smaller than cat"); //alert displayed
// }


// Task  6
// var obtainedMarks = prompt("Enter obtained marks :");
// var totalMarks = prompt("Enter total marks:");
// var percentage =  (obtainedMarks/totalMarks)*100;
// var grade, remarks;
// if(percentage>=80){
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if(percentage>=70){
//     grade = "A";
//     remarks = "Good";
// }
// else if(percentage>=60){
//     grade = "B";
//     remarks = "You need to improve";
// }
// else if(percentage<60){
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.getElementById("text").innerHTML = "<h1>Mark Sheet</h1>";
// document.getElementById("text").innerHTML += "<h3>Total Marks: "+totalMarks+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Obtained Marks: "+obtainedMarks+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Percentage: "+percentage+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Grade: "+grade+"</h3>";
// document.getElementById("text").innerHTML += "<h3>Remarks: "+remarks+"</h3>";

// Task 7
// var secretNum = 4;
// var guess = prompt("Guess number");
// if (guess==secretNum) {
//     alert("Bingo! Correct answer");
// }
// else if(guess==secretNum+1){
//     alert("Close enough to the correct answer");
// }

// Task 8
// var num = prompt("Enter number");
// if(num%3==0){
//     alert("number is divisible by 3");
// }

// Task 9
// var num = prompt("Enter number");
// if (num % 2 == 0) {
//     alert("number is even");
// }
// else if(num%2!=0){
//     alert("number is odd");
// }

// Task 10
// var tmp = prompt("Enter temperature:");
// if (tmp>40) {
//     alert("It is too hot outside.");
// }
// else if(tmp>30){
//     alert("The Weather today is Normal.");
// }
// else if(tmp>20){
//     alert("Today’s Weather is cool.");
// }
// else if(tmp>10){
//     alert("OMG! Today’s weather is so Cool.");
// }

// Task 11
// var a = prompt("Enter First Number:");
// var b = prompt("Enter Second Number:");
// var operation = prompt("Enter operation symbol:");
// if (operation == "+") {
//     alert(parseInt(a) + parseInt(b));
// } else if (operation == "-") {
//     alert(parseInt(a) - parseInt(b));
// } else if (operation == "*") {
//     alert(parseInt(a) * parseInt(b));
// } else if (operation == "/") {
//     alert(parseInt(a) / parseInt(b));
// } else if (operation == "%") {
//     alert(parseInt(a) % parseInt(b));
// }

// =========================Chapter # 12-13===========================
// Task 1                                       (Not able solved)
// var ch = prompt("Enter any number or letter:");
// alert(typeof(parseInt(ch)));                               
// if(typeof(ch) == "number" ){
//     alert("is a number");
// }

// Task 2
// var a = prompt("Enter First Number:");
// var b = prompt("Enter Second Number:");
// if(a>b){
//  alert(a+" is larger");
// }
// else if(b>a){
//     alert(b+" is larger");
//    }
// else if(a==b){
//     alert(a+" and "+b+" is equal");
// }

// Task 3
// var num = prompt("Enter any Number:");
// if(num<0){
//     alert("number is negative");
// }
// else if(num>0){
//     alert("number is positive");
// }
// else if(num==0){
//     alert("number is 0");
// }

// Task 4
// var ch = prompt("Enter Single Character:");
// if(ch=="a" || ch=="i" || ch=="o" || ch=="e" || ch=="u"){
//     alert("true")
// }
// else{
//     alert("false")
// }

// Task 5
// var pass = "1234";
// var userPass = prompt("Enter your password");
// if(userPass==""){
//     alert("Please enter password");
// }
// else if(pass == userPass){
//     alert("Correct! The password you entered matches the original password");
// }
// else if (pass != userPass){
//     alert("Incorrect password");
// }

//  Task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }             // missing bracket
// else {       //missing bracket
// greeting = "Good evening";
// }

// Task 7
// var time = parseInt(prompt("Enter time in 24 hour format like 1900-> 7PM"));
// if(time>= 0000 && time<1200){
//     alert("Good Morning");
// }
// else if(time>= 1200 && time<1700){
//     alert("Good Afternoon");
// }
// else if(time>= 1700 && time<2100){
//     alert("Good Evening");
// }
// else if(time>= 2100 && time<2359){
//     alert("Good Night");
// }
// else{
//     alert("plz enter valid time")
// }


// =========================Chapter # 14-16===========================
// Task 1
// var stdName = [];

// Task 2
// var stdName = new Array(5);

// Task 3
// var names = ["ali","ahmad","arif"];

// Task 4
// var rollNo = [1,2,3];

// Task 5
// var boolArray = [true,false];

// Task 6
// var mixArray = [1,"ali", 2,"ahmad", 3,"arif"];

// Task 7
// var qualifications= ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.getElementById("text").innerHTML = "<h1>Qualifications:</h1>";
// var i = 1;
// qualifications.forEach(function(qualification){
//     document.getElementById("text").innerHTML += "<h3>"+i+") "+qualification+"</h3>";
//     ++i;

// });

// Task 8
// var stuNames = ["Michael","John","Tony"];
// var stuMarks = [320,230,480];
// for(i=0; i<stuNames.length;i++){
// document.getElementById("text").innerHTML += "<h3>Score of "+stuNames[i]+" is "+stuMarks[i]+" Percentage: "+((stuMarks[i]/500)*100)+"%</h3>";
// }

// Task 9
// var colors= ["red","orange", "Yellow"];
// var userColor = prompt("Enter color you want to add:");
// colors.unshift(userColor);
// alert(colors);

// var userColor = prompt("Enter color you want to add:");
// colors.push(userColor);
// alert(colors);

// colors.push("grey","white");
// alert(colors);

// colors.shift();
// alert(colors);

// colors.pop();
// alert(colors);


// Task 10
// var stuScores = [280,380,120,480];
// alert(stuScores.sort());









// =========================Chapter # 17-20===========================
// Task 1                                   (Not able solved)
// var table = new Array(10); // 10 rows of the table
// for(var i = 0; i < table.length; i++)
// table[i] = new Array(10); // Each row has 10 columns          
// // Initialize the array
// for(var row = 0; row < table.length; row++) {
// for(col = 0; col < table[row].length; col++) {
// table[row][col] = row*col;
// }
// }

// task 2                                    (Not able solved)
    
// Task 3
// for(i=1;i<=10;i++){
//     document.getElementById("text").innerHTML += "<p>"+i+"</p>";
// }

// Task 4
// var number = parseInt(prompt("Enter a number to show its multiplication table:"));
// var length = parseInt(prompt("Enter length of table:"));
// for (i = 1; i <= length; i++) {
//     document.getElementById("text").innerHTML += "<p>" + number + "x" + i + "=" + (number * i) + "</p>";
// }

// Task 5
// var fruits = ["banana", "mango", "orange","strawberry"];
// i=0;
// fruits.forEach(function(fruit){
//  document.getElementById("text").innerHTML += "<p>" +fruit+ "</p>";   
// });
// n=fruits.length;
// for (i = 0; i < fruits.length; i++) {
//     document.getElementById("text").innerHTML += "<p> Element at index "+i+" is "+fruits[i]+"</p>";
// }

// Task 6
// document.getElementById("text").innerHTML += "<h1>Counting:</h1>";
// for(i=1; i<=15; i++){
//     document.getElementById("text").innerHTML += "<span>"+i+",</span>";
// }

// document.getElementById("text").innerHTML += "<h1>Reverse Counting:</h1>";
// for(i=10; i>=1; i--){
//     document.getElementById("text").innerHTML += "<span>"+i+",</span>";
// }

// document.getElementById("text").innerHTML += "<h1>Even:</h1>";
// for(i=0; i<=20; i+=2){
//     document.getElementById("text").innerHTML += "<span>"+i+",</span>";
// }
// document.getElementById("text").innerHTML += "<h1>Odd:</h1>";
// for(i=1; i<=20; i+=2){
//     document.getElementById("text").innerHTML += "<span>"+i+",</span>";
// }
// document.getElementById("text").innerHTML += "<h1>Series:</h1>";
// for(i=2; i<=20; i+=2){
//     document.getElementById("text").innerHTML += "<span>"+i+"k,</span>";
// }

// Task 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
// for(i=0;i<A.length; i++){
//     if(search == A[i]){
//      document.getElementById("text").innerHTML = "<h3>"+search+" is available at index "+i+" in our bakery</h3>";
//      break;
//     }
//     else{
//       document.getElementById("text").innerHTML = "<h3>We are sorry "+search+" is not available in our bakery</h3>";

//     }
// }

// Task 8
// A = [24, 53, 78, 91, 12];
// a=A[0];
// document.getElementById("text").innerHTML = "<span>Array items:</span>";
// for(i=0;i<A.length;i++){
//     if(a<A[i]){
//         a=A[i];
//     }
//  document.getElementById("text").innerHTML += "<span>"+A[i]+",</span>";

// }
// document.getElementById("text").innerHTML += "<h3>The largest number is "+a+"</h3>";

// Task 9
// A = [24, 53, 78, 91, 12];
// a=A[0];
// document.getElementById("text").innerHTML = "<span>Array items:</span>";
// for(i=0;i<A.length;i++){
//     if(a>A[i]){
//         a=A[i];
//     }
//  document.getElementById("text").innerHTML += "<span>"+A[i]+",</span>";

// }
// document.getElementById("text").innerHTML += "<h3>The smallest number is "+a+"</h3>";

// Task 10
// for(i=5; i<=100; i+=5){
//     document.getElementById("text").innerHTML += ""+i+",";
// }