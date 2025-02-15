// // Task 1

// var orange1KGPrice = 400;
// var apple1KGprice = 500;
// var moneyIHave = 1200;

// var totalPrice = orange1KGPrice + apple1KGprice;

// var totalReturn = moneyIHave - totalPrice;
// console.log(totalReturn);


// // task 2

// var bangla = 95;
// var english = 86;
// var math = 99;
// var physics = 80;
// var biology = 88;
// var chemistry = 90;

// var total = bangla + english + math + physics + biology + chemistry;

// var average = total / 6 ;

// console.log(average.toFixed(3));

// // task 3

// var Num1 = 3;
// var Num2 = 5;
// var Num3 = 6;

// var reminderNum1 = Num1 % 5;
// var reminderNum2 = Num2 % 5;
// var reminderNum3 = Num3 % 5;

// console.log(reminderNum1);
// console.log(reminderNum2);
// console.log(reminderNum3);


// // task 3

// const a = isNaN('11'); //false
// const b = isNaN(2-10);  //false
// const c = isNaN ('hello') //true

// console.log(a);
// console.log(b);
// console.log(c);


// // Grading

// var mark = 70;

// if(mark >= 80 && 100 >= mark ){
//     console.log('A+');
// }
// else if(mark >= 70 && mark < 80){
//     console.log('A-');  
// }
// else if( mark >= 60 && mark < 70){
//     console.log('B');
// }
// else if( mark >= 50 && mark < 60){
//     console.log('C');
// }
// else{ 
//     console.log('Fail');
// }


// // -----BMI-----

// var weightKg = 50;
// var heightMeter = 1.5;

// var bmi = (weightKg / (heightMeter * heightMeter));

// if(bmi <= 18.4){
//     console.log('You are under weight');
// }
// else if ( bmi >= 18.5 && bmi <= 24.9){
//     console.log('You are normal');
// }
// else if ( bmi >= 25.0 && bmi <= 39.9){
//     console.log('You are overweight');
// }
// else if ( bmi >= 40.0){
//     console.log('You are Obese');
// }
// else{
//     console.log('Please Enter Right weight and Height' );
// }


// // Free Drinks
// var burger = 400;
// if(burger >= 500){
//     console.log('You got a free coke');
// }
// else {
//     console.log('coke price 30tk');
// }


// // Nested if else
// var myNumber = 85;
// var myFrndNumber = 90;

// if( myNumber > 80){
// if(myFrndNumber > 80){
//     console.log('Go for a lunch');
//     }
// else if(myFrndNumber < 80 && myFrndNumber >= 60 ){
//     console.log( 'Good luck next time.' );
// }
// else if (myFrndNumber < 60 && myFrndNumber >= 40){
//     console.log(' Keep your friends message unseen.');
// }
// else if(myFrndNumber < 40) {
//     console.log('Block your friend');
// }
// }
// else{
//     console.log(' Go to home and sleep and act sad')
// 
// 
// // tenary
// var num1 = 12;
// var num2 = 13;
// var result;

// if (num1 > num2){
//   result = num1 * 2;
// }
// else {
//     result = num1 + num2;
// }
// console.log(result);


// var num1 = 12;
// var num2 = 13;
// var result;
// num1 > num2 ? result = num1 * 2 : result = num2 + num2;
// console.log(result);


// // Ticket fare Calculator
// var ticketFare = 800;
// var age = 60;

// if(age < 10){
//     console.log('ticket is free');
// }
// else if( age < 18){
//     ticketFare = 800 - (800*50/100);
//     console.log(ticketFare);
// }
// else if (age >= 60){
//     ticketFare = 800 - (800*15/100);
//     console.log(ticketFare);
// }
// else{
//     console.log(ticketFare);
// }


// -----Array------
// // Task -1 Declare an array
// var fruits = ['orange', 'apple', 'mango', 'lichi', 'Watermelon'];
// console.log(fruits);
// console.log(fruits[2]);
// fruits[1] = 'jambura';
// console.log(fruits[1]);
// console.log(fruits);

// // Task -2 Add or remove elements
// var tourist = ['kuakata', 'sundorban', 'sajek'];
// console.log(tourist);
// tourist.push('coxbazar');
// console.log(tourist);
// tourist.push('shitakundo', 'srimongol');
// console.log(tourist);
// tourist.pop('srimongol');
// console.log(tourist);


// // Task- 2 Checking Array Membership with ‘includes’
// var books = ['Dracula', 'Karenina', 'javascript', 'Mockingbird', 'Gatsby']; 
// console.log(books);
// console.log(books.includes('javascript'));
// if (books.includes('javascript')){
//     console.log('This Array  contains a JavaScript book');
// }
// else{
//     console.log('This Array does not contain JavaScript book');
// }


// // Task-04 Checking if it's an Array
// var num = [4, 5, 6, 10, 34];
// var animal = ('cow', 'cat', 'dog');
// console.log(Array.isArray(num));
// console.log(Array.isArray(animal));

// if(Array.isArray(num)){
//     console.log('This variable is an array');
// }
// else{
//     console.log('This variable is not an array');
// }
// if(Array.isArray(animal)){
//     console.log('This variable is an array');
// }
// else{
//     console.log('This variable is not an array');
// }


// // Task-5 Combining Arrays
// var desk = ['noodles', 'chocolate', 'biskut', 'fanta'];
// var oddNum = [2, 4, 6, 8, 10];
// var deskAndoddNum = desk.concat(oddNum);
// console.log(deskAndoddNum);
// console.log(desk);
// console.log(oddNum);


// -------Loop-------
// // Task 1
// var num = 1;
// while(num <= 60){
//     console.log(num,'I will invest at least 6 hrs every single day for next 60 days!');
//     num++;
// }

// Task- 2
// var num = 61;
// while(num <= 100){
//     if(num % 2 != 0){
//         console.log(num,'This id odd number');
//     }
//     num++;
// }
// var num = 78;
// while(num <= 98){
    
//     if(num % 2 === 0){
//         console.log(num,'This id even number');
//     }
//     num++;
// }


// //  Task - 3
 // var num = 81;
 // var sum = 0;
 // while(num <= 131){
    
 //     if(num % 2 != 0){
 //         sum = sum + num
 //         console.log(sum,'This id odd number sum from 81 to 131.');
 //     }
 //     num++;
 // }
// var num = 206;
// var sum = 311;
// while(num <= 311){
    
//     if(num % 2 === 0){
//         sum = sum + num
//         console.log(sum,'This is even number sum from 206 to 311.');
//     }
//     num++;
// }

// // let num = 5;
// // let i = 1;
// // while(i <= 10){
// //     console.log(num);
// //     num = num * i; 
// //     i++;
// //     console.log(num);

// // }

// // Task - 5
// var num = 21;
// console.log('This is a countdown timer from 21 to 15')
// while(num >= 15){
//     console.log(num)
//     num--;
// }


// break-----

// // task 1
// var num = 1;
// while(num <= 200){
//     if(num > 100){
//         break;
//     }
//     console.log(num);
//     num++
// }
// // task 2
// let sum = 0;
// for(let i = 1; i <= 100 ; i++){
//     sum = sum + i;
//         if(sum > 100){
//         break;
//     }
//     console.log('Total sum is',sum);
// }

// // task 3

// let num = 1;
// while(num <= 100){
//     console.log(num);
//     num ++;
//     if(Number.isInteger(Math.sqrt(num))){
//         break;
//     }

// }
// continue-------
// // task 1
// for(let i = 1; i <= 40; i++){
    
//     if(i % 2 === 1 ){
//         continue;
//     }
//     console.log(i);
// }

// // task 2
// for(let i = 55; i <= 85; i++){
    
//     if(i % 2 === 1 ){
//         if(i % 5 === 0){
//             continue;
//         }   
// console.log(i);
// }
// }

