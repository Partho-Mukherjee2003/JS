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