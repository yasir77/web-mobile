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