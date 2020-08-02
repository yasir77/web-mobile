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

// =========================Chapter # 21-25===========================
// Task 1
// var fName = prompt("Enter First Name:");
// var lName = prompt("Enter Last Name:");
// var fullName = fName+" "+lName;
// alert("Welcome "+fullName+"!");

// Task2
// var fMobileModel = prompt("Enter Your Favorite Mobile Model:");
// document.getElementById("text").innerHTML = "<h1>My favorite phone is: "+fMobileModel+"<br>Length of String: "+fMobileModel.length+"</h1>"

// Task3
// var str = "Pakistan";
// document.getElementById("text").innerHTML = "<h1>String: "+str+"<br>Index of 'n': "+str.indexOf('n')+"</h1>";

// Task 4
// var str = "Hello World";
// document.getElementById("text").innerHTML = "<h1>String: "+str+"<br>Last index of 'l': "+str.lastIndexOf('l')+"</h1>";

// Task 5
// var str = "Pakistani";
// document.getElementById("text").innerHTML = "<h1>String: "+str+"<br>Character at index 3: "+str.charAt(3)+"</h1>";

// Task 6
// var fName = prompt("Enter First Name:");
// var lName = prompt("Enter Last Name:");
// var fullName = fName.concat(" ", lName);
// alert("Welcome "+fullName+"!");

// Task 7
// var str = "Hyderabad";
// document.getElementById("text").innerHTML = "<h1>City: "+str+"<br>After Replacement: "+str.replace('Hyder','Islam')+"</h1>";

// Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.getElementById("text").innerHTML = "<h1>Message: "+message+"<br>After Replacement: "+message.replace(/and/g,'&')+"</h1>";

// Task 9
// var str = "472";
// var converted = Number(str); 
// document.getElementById("text").innerHTML = "<h1>Value: "+str+"<br>Type: "+typeof(str)+"<br>Value: "+converted+"<br>Type: "+typeof(converted)+"</h1>";

// Task 10
// var str = prompt("Enter any thing:");
// document.getElementById("text").innerHTML = "<h1>User input: "+str+"<br>Upper case: "+str.toUpperCase()+"</h1>";

// Task 11
// var str = prompt("Enter any thing:");
// var firstCh = str[0];
// document.getElementById("text").innerHTML = "<h1>User input: "+str+"<br>Title case: "+str.replace(firstCh,firstCh.toUpperCase())+"</h1>";

// Task 12
// var num = 35.36;
// var numToString  = num.toString();
// document.getElementById("text").innerHTML = "<h1>Number: "+num+"<br>Result: "+numToString.replace(".","")+"</h1>";

// Task 13
// str = prompt("Enter username:");
// while(str == ""){
//    str = prompt("Enter username:");
// }
// var strArr = str.split("");
// for(i=0;i<strArr.length;i++) {
//     var asciCode = strArr[i].charCodeAt();
//     if (asciCode == 33 || asciCode == 44 || asciCode == 46 || asciCode == 64 || asciCode == "" ) {
//         str=prompt("Please enter valid username");
//         strArr =str.split("");
//         i = -1;
//     }
// }

// Task 14
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchKey = prompt("Welcome to ABC Bakery. What do you want to order Sir/Mam:");
// while (searchKey == "") {
//     searchKey = prompt("Welcome to ABC Bakery. What do you want to order Sir/Mam:");
// }
// var key = searchKey.toLowerCase();
// var itemFound= false;
// var i = 0;
// A.forEach(function(element){
//     if(key == element){
//         document.getElementById("text").innerHTML = "<h1>"+key+" is available at index "+i+"</h1>";
//         itemFound = true;
//     }
//     i++;
// });
// if(!itemFound){
//     document.getElementById("text").innerHTML = "<h1>We are sorry. "+searchKey+" is not available in our bakery</h1>";
// }

// Task 15
// var password = prompt("Enter your password:");
// while (password != "") {
//     if (password.length < 6) {
//         password = prompt("Enter valid password:");
//     } else if ((password[0].charCodeAt() <= 57) && (password[0].charCodeAt() >= 48)) {
//         password = prompt("Enter valid password:");

//     } else {
//         break;
//     }
// }

// Task 16
// var university = "University of Karachi";
// var arr = university.split("");
// arr.forEach(function(item) {
//    document.getElementById("text").innerHTML += "<p>"+item+"</p>";
//    if(item == " "){
//    document.getElementById("text").innerHTML += "<br>";
//    }
// });

// Task 17
// var userInput = prompt("Enter:");  
// document.getElementById("text").innerHTML = "<h1>User input: "+userInput+"<br>Last character of input: "+userInput[userInput.length-1]+"</h1>";

// Task 18
// var str = "The quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/gi) || []).length;
// document.getElementById("text").innerHTML = "<h1>Text: "+str+"<br>There are "+count+" occurrence(s) of word 'the'</h1>";





// =========================Chapter # 26-30===========================
// Task 1
// var number = Number(prompt("Enter Positive Integer"));
// document.getElementById("text").innerHTML = "<h1>Number: " + number + "<br>Round off value: " + Math.round(number) + "<br> Floor value: " + Math.floor(number) + "<br>Ceil Value: " + Math.ceil(number) + "</h1>";

// Task 2
// var number = parseFloat(prompt("Enter Negative Floating Point Number:"));
// document.getElementById("text").innerHTML = "<h1>Number: " + number + "<br>Round off value: " + Math.round(number) + "<br> Floor value: " + Math.floor(number) + "<br>Ceil Value: " + Math.ceil(number) + "</h1>";

// Task 3
// var number = Number(prompt("Enter any number value:"));
// document.getElementById("text").innerHTML = "<h1>The absolute value of " + number + " is " + Math.abs(number) + "</h1>";

// Task 4
// document.getElementById("text").innerHTML = "<h1>Random dic value: " + Math.floor(Math.random()*6+1) + "<br>Random dic value: " + Math.floor(Math.random()*6+1) +"</h1>";

// Task 5
// var randomNum = Math.floor(Math.random()*2+1);
// var value;
// if(randomNum == 1){
//     value = "Tails";
// }
// else{
//     value = "Heads";
// }
// document.getElementById("text").innerHTML = "<h1>" + randomNum + "<br>Random coin value: " + value +"</h1>";

// Task 6
// var randomNum = Math.floor(Math.random()*100+1);
// document.getElementById("text").innerHTML = "<h1>Random number between 1 and 100: " + randomNum + "</h1>";

// Task 7
// var userWeight = prompt("Enter your weight in kilograms:");
// if(userWeight.indexOf("k")!=-1){
//      var weight = Number(userWeight.slice(0,userWeight.indexOf("k")));
//      var unit = userWeight.slice(userWeight.indexOf("k"));
//     document.getElementById("text").innerHTML = "<h1>The weight of the user is " + weight + " Kilograms.</h1>";   
// }
// else{
//     document.getElementById("text").innerHTML = "<h1>The weight of the user is " + userWeight + " Kilograms.</h1>";   
// }

// Task 8
// var secretNum = Math.floor(Math.random()*10+1);
// var userNum = Number(prompt("Enter a number between 1 to 10"));
// if(userNum == secretNum){
//     alert("Congratulation! you guessed the number");
// }
// else{
//     alert("Try Again!");
// }


// =========================Chapter # 31-34===========================

// Task 1
// document.getElementById("text"). innerHTML =""+Date()+"";

// Task 2
// var rightNow = new Date();
// var month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// alert("Current Month: "+month[rightNow.getMonth()]);

// Task 3
// var rightNow = new Date();
// var days =["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// alert("Today is: "+days[rightNow.getDay()].slice(0,3));

// Task 4
// var rightNow = new Date();
// var days =["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// if(days[rightNow.getDay()] == "Saturday" || days[rightNow.getDay()] == "Sunday"){
// alert("It's Fun day.");
// }

// Task 5
// var rightNow = new Date();
// if(rightNow.getDate() < 16){
// alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

// Task 6
// var rightNow = new Date();
// document.getElementById("text"). innerHTML = "<h1>Current Date: "+rightNow+"<br>Elapsed milliseconds since January 1, 1970: "+rightNow.getTime()+"<br>Elapsed minutes sice January 1, 1970: "+rightNow.getTime()/60000+"</h1>";

// Task 7
// var rightNow = new Date();
// if(rightNow.getHours()<12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// Task 8
// var laterDate = new Date("December 31, 2020");
// document.getElementById("text").innerHTML = "<h1>"+laterDate+"</h1>";

// Task 9
// var todayDate = new Date();
// var firstRamadan = new Date("April 24, 2020");
// var diff = todayDate.getTime() - firstRamadan.getTime();
// var daysPassed = Math.floor(diff/(1000*60*60*24));
// document.getElementById("text").innerHTML = "<h1>"+daysPassed+" days have passed since 1st Ramadan, 2020</h1>";

// Task 10
// var refDate = new Date("December 5, 2015");
// var startDate = new Date("January 1, 2015");
// var diff = Math.floor(refDate.getTime() - startDate.getTime());
// document.getElementById("text").innerHTML = "<h1>On reference date "+refDate+", "+diff/1000+" seconds have passed since beginning of 2015</h1>";

// Task 11
// var nowDate = new Date();
// var before =new Date();
// var currentHour = nowDate.getHours();
// nowDate.setHours(currentHour+1);
// document.getElementById("text").innerHTML = "<h1>Current date: "+nowDate+"<br>1 hour ago, it was "+before+"</h1>";

// Task 12
// var nowDate = new Date("December 5, 2015");
// var before100Year =new Date();
// var currentYear = nowDate.getFullYear();
// before100Year.setTime(nowDate.getTime());
// before100Year.setFullYear(currentYear-100);
// document.getElementById("text").innerHTML = "<h1>Current date: "+nowDate+"<br>100 Year back, it was "+before100Year+"</h1>";

// Task 13
// var age = Number(prompt("Enter your age"));
// var nowDate = new Date();
// var birthYear = nowDate.getUTCFullYear()-age;
// document.getElementById("text").innerHTML = "<h1>Your Age is: "+age+"<br>Your birth year is "+birthYear+"</h1>";

// Task 14
// var nowDate = new Date();
// var month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// document.getElementById("text"). innerHTML = "<h1>K-Electric Bill</h1>";
// document.getElementById("text"). innerHTML += "<h4>Customer Name: ABC Customer<br>Month: "+(month[nowDate.getMonth()])+"</h4>";
// document.getElementById("text"). innerHTML += "<h4>Number of units: 410<br>Charges Per Unit: 16</h4>";
// document.getElementById("text"). innerHTML += "<h4>Net Amount Payable (Within Due Date):"+410*16+"<br>Late payment surcharge: 350</h4>";
// document.getElementById("text"). innerHTML += "<h4>Gross Amount Payable (After Due Date):"+(410*16+350)+"</h4>";


// =========================Chapter # 35-38===========================

// Task 1
// function displayDate() {
//     var now = new Date();
//     document.getElementById("text").innerHTML = "<h1>"+now+"</h1>";
// }
// displayDate();

// Task 2
// function username(fname,lname) {
//     document.getElementById("text").innerHTML = "<h1>Welcome "+ fname+" "+lname+"</h1>";
// }
// username("Muhammad","Yasir");

// Task 3
// function addnum(firstNum,secondNum) {
//     return firstNum+secondNum;
// }
// alert(addnum(4,5));

// Task 4
// function calculator(num1, num2, operator) {
//     if(operator=='+'){
//         result = num1+num2;
//     }
//     else if(operator == '-'){
//         result = num1 - num2; 
//     }
//     else if(operator == '/'){
//         result = num1 / num2; 
//     }
//     else if(operator == '*'){
//         result = num1 * num2; 
//     }
//     else if(operator == '%'){
//         result = num1 % num2; 
//     }
//     return result;
// }
// document.getElementById("text").innerHTML = "<h1>"+calculator(3, 4, "+")+"</h1>"

// Task 5
// function square(num) {
//     return num*num;
// }
// alert(square(2));

// Task 6
// function factorial(num) {
//     return (num != 1) ? num * factorial(num - 1) : 1;
// }
// alert(factorial(4));

// Task 7
// function counting(start, end) {
//     for (i = start; i <= end; i++) {
//         document.getElementById("text").innerHTML += "<h3>" + i + "</h3>";
//     }
// }
// counting(1, 5);

// Task 8
// function calculateSquare(num) {
//     return num * num;
// }
// function calculateHypotenuse(base, perpendicular) {
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
// }
// alert(calculateHypotenuse(4, 4));

// Task 9
// function area(w, h) {
//     return w * h;
// }
// area(4,5);
// var width = 4;
// var height = 5;
// area(width,height);

// Task 10
// function palindrome(str) {
//     var strToCheck = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
//     var count = 0;
//     if ((strToCheck.length) % 2 === 0) {
//         count = (strToCheck.length) / 2;
//     } else {
//         if (strToCheck.length === 1) {
//             console.log("String is palindrome.");
//             return true;
//         } else {
//             count = (strToCheck.length - 1) / 2;
//         }
//     }
//     for (var i = 0; i < count; i++) {
//         if (strToCheck[i] != strToCheck.slice(-1 - i)[0]) {
//             console.log("String is not a palindrome.");
//             return false;
//         }
//     }
//     console.log("The string is a palindrome.");
//     return true;
// }
// alert(palindrome("ab"));

// Task 11
// function upperCaseFirst(str) {
//    var arr = str.split(" ");
//    var newArr = [];
//    for(i=0;i<arr.length;i++){
//        newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
//    }
//    return newArr.join(' ');
// }
// alert(upperCaseFirst("the quick brown fox"));

// Task 12
// function longestWord(str) {
//     var arr = str.split(" ");
//     var max = arr[0];
//     for(i=0;i<arr.length;i++){
//        if(max.length < arr[i].length){
//            max = arr[i];
//        }
//     }
//     return max;
//  }
//  alert(longestWord("Web Development Tutorial"));

// Task 13
// function chCount(str, letter) {
//   var letterCount = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) == letter) {
//       letterCount += 1;
//     }
//   }
//   return letterCount;
// }
// alert(chCount("JSResourceS.com", "o"));

// Task 14
// function calcCircumference(radius) {
//   alert("The circumference is "+2*3.14*radius);
  
// }
// function calcArea(radius) {
//   alert("The area is "+3.14*radius*radius);
  
// }
// calcArea(2);
// calcCircumference(2);

// =========================Chapter # 38-42===========================

// Task 1
// function power(a,b){
// alert("A raised to b = "+Math.pow(a,b)+"");
// }
// power(5,2);

// Task 2
// function isLeapYear(){
// var year = prompt("Please Enter Year",2020);
// if(year%4==0){
//     alert("Leap Year");
// }
// else{
//     alert("Not a Leap Year");
// }
// }
// isLeapYear();

// Task 3
// function triangleArea(a,b,c){
//     var s = S(a,b,c);
//     var area = s*(s-a)*(s-b)*(s-c);
//     alert("area of triangle is "+area);
// }
// function S(a,b,c){
//     return (a+b+c)/2;
// }
// triangleArea(2,3,4);

// Task 4
// function average(a,b,c){
// return Math.round((a+b+c)/3);
// }
// function percentage(a,b,c){
//     var sum = a+b+c;
//     var percent = (sum/300)*100; 
//     return Math.round(percent);
// }
// function mainFunction(){
//     var subj1Marks = parseInt(prompt("Enter First subject Marks(Total Marks=100)"));
//     var subj2Marks = parseInt(prompt("Enter Second Subject Marks(Total Marks=100)"));
//     var subj3Marks = parseInt(prompt("Enter Third Subject Marks(Total Marks=100)"));
//     alert("Average Marks is "+average(subj1Marks,subj2Marks,subj3Marks)+"\nPercentage is "+percentage(subj1Marks,subj2Marks,subj3Marks)+"%");
// }
// mainFunction();

// Task 5
// function index(){
//     var item = prompt("Item name for which you want to find index:");
//     var arr =["a","b","c"];
//     var index;
//     for (i = 0; i < arr.length; i++) {
//         if(item === arr[i]){
//             index = i;
//         }
//     }
//     if(index != undefined){
//     alert("Index of "+item+" is "+index);
//     }
//     else{
//      alert("Item not found in array");
//     }
// }
// index();

// Task 6
// function deleteVov(sentence){
//     for(i=0;i<sentence.length;i++){
//         if(sentence[i]=='a' || sentence[i]=='e'|| sentence[i]=='i'|| sentence[i]=='o'|| sentence[i]=='u'){
//             var ch = sentence[i];
//             sentence = sentence.replace(ch, '');
//             i = -1;
//         }
//     }
//     return sentence;
// }
// var sentence = prompt("Enter any sentence");
// var orignalSentence = sentence;
// alert("Orignal Sentence: "+orignalSentence+" Without Vovels:"+deleteVov(sentence));

// Task 7
// Task 8
// Task 9
// Task 10

// =========================Chapter # 43-48===========================

// Task 1
function message(){
    alert("You clicked the link");
}
// Task 2
function msg(){
    alert("Thanks for purchasing from us");
}
// Task 3
function deleteRecord(e){
e.parentElement.remove();
}
// Task 4
function changeImg(e){
    e.setAttribute('src','img/mobile2.png');
}
function previousImg(e){
    var img = e.getAttribute('alt');
    e.setAttribute('src','img/'+img+'.png');
}
// Task 5
function plus(){
   var counter = document.getElementById('counter');
    var val = parseInt(counter.innerText);
    val = val+1;
    counter.innerText=val;   
}
function minus(){
    var counter = document.getElementById('counter');
     var val = parseInt(counter.innerText);
     val = val-1;
     counter.innerText=val;    
 }


// =========================Chapter # 49-52===========================

// Task 1
function submit(){
    var username = document.getElementById("username").value;
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var h1 = document.createElement('h1');
    h1.innerHTML = "Form Submitted. Your submitted Details are:";
    var p = document.createElement('p');
    p.innerHTML = "Username: "+username+"<br>Full Name: "+fullName+"<br>Email: "+email+"";
    document.getElementById("sign-up").innerHTML = '';
    document.getElementById('sign-up').appendChild(h1);
    document.getElementById('sign-up').appendChild(p);
}

// Task 2
function readMore(e){
    e.parentElement.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minus optio beatae dolorum error adipisci nemo ab sapiente, perferendis soluta incidunt? Est beatae earum assumenda labore? Facilis adipisci minima inventore.';
}

// Task 3
function stuDetails(){
    var stuName = document.getElementById("stu-name").value;
    var stuFatherName = document.getElementById("father-name").value;
    var stuRollNo = document.getElementById("roll-no").value;
    var stuClass = document.getElementById("stu-class").value;
    var table = document.getElementById('table-content');
    var tr = document.createElement('tr');
    tr.innerHTML = "<td>"+stuName+"</td><td>"+stuFatherName+"</td><td>"+stuRollNo+"</td><td>"+stuClass+"</td><td><button onclick='editStuRecord(this)'>Edit</button><button onclick ='deleteStuRecord(this)'>Delete</button></td>";
    table.appendChild(tr);
}

// deleting record
function deleteStuRecord(e){
    document.getElementById("stu-record-form").classList.remove("display-none");
    document.getElementById("stu-record-edit").setAttribute("class","display-none");
    e.parentElement.parentElement.remove();
}

// editing record
function editStuRecord(e){
    document.getElementById("stu-record-form").setAttribute("class","display-none");
    document.getElementById("stu-record-edit").classList.remove("display-none");

    window.targetRecord= e.parentElement.parentElement;
    var stuName = targetRecord.firstChild.childNodes[0].nodeValue;
    var stuFatherName = targetRecord.childNodes[1].childNodes[0].nodeValue;
    var stuRollNo = targetRecord.childNodes[2].childNodes[0].nodeValue;
    var stuClass = targetRecord.childNodes[3].childNodes[0].nodeValue;
    document.getElementById("upd-stu-name").value = stuName;
    document.getElementById("upd-father-name").value = stuFatherName;
    document.getElementById("upd-roll-no").value = stuRollNo;
    document.getElementById("upd-stu-class").value = stuClass;
}

// update record
function updateRecord(){
    var stuName = document.getElementById("upd-stu-name").value;
    var stuFatherName = document.getElementById("upd-father-name").value;
    var stuRollNo = document.getElementById("upd-roll-no").value;
    var stuClass = document.getElementById("upd-stu-class").value;
    window.targetRecord.firstChild.childNodes[0].nodeValue = stuName;
    window.targetRecord.childNodes[1].childNodes[0].nodeValue = stuFatherName;
    window.targetRecord.childNodes[2].childNodes[0].nodeValue = stuRollNo;
    window.targetRecord.childNodes[3].childNodes[0].nodeValue = stuClass;
    document.getElementById("stu-record-form").classList.remove("display-none");
    document.getElementById("stu-record-edit").setAttribute("class","display-none");
}


// =========================Chapter # 49-53===========================






// =========================Chapter # 58-67===========================

// Task 1
var content = document.getElementById("main-content");
console.log(content.childNodes);

var render =document.getElementsByClassName("render");
var htm;
for(var i = 0; i<render.length; i++){
    htm += render[i].innerHTML;

}
console.log("Inner HTML of child nodes of render class "+htm);

document.getElementById("first-name").value = "Ali";
document.getElementById("last-name").value = "Hassan";
document.getElementById("email").value = "abc@gmail.com";

// Task 2
console.log("Node Type of element with id form-content is "+document.getElementById("form-content").nodeType);
console.log("Node Type of element with id lastName is "+document.getElementById("lastName").nodeType+" and it's child node NodeType is "+document.getElementById("lastName").firstChild.nodeType);
document.getElementById("lastName").firstChild.nodeValue = "Last Name: Smith";
// getting first element child
console.log(document.getElementById("main-content").firstElementChild);
// getting last element  child
console.log(document.getElementById("main-content").lastElementChild);
// getting next sibling of element
console.log(document.getElementById("lastName").nextElementSibling);
// getting previous sibling of element
console.log(document.getElementById("lastName").previousElementSibling);
// getting parent node of element having id email and nodetype
console.log(document.getElementById("email").parentElement);
console.log("NodeType of element with id email is "+document.getElementById("email").nodeType);