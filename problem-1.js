// function centimiterToMiter(cm){
//     let miterFraction = cm * 100;
// return miterFraction;
// }
// const result = centimiterToMiter(56);
// console.log(result);


// function miterToCentimiter(m){
//     const centimiterFraction =  m / 100;
//     const miterPart = parseInt(centimiterFraction);
//     const centimiterPart = m % 100;
//     const result = miterPart + 'miter ' + centimiterPart + 'Centimiter ';
//     return result;

// }
// const result = miterToCentimiter(550);
// console.log(result);

// // Calculate even average from a array
// function numbersOfArray(numbers){
// //console.log(numbers);
// const oddArray = [];
// for (const number of numbers){
//     //console.log(number)
//     if(number % 2 === 0){
//         //console.log(number)
//     oddArray.push(number);
//     }
// }
// //console.log(oddArray);
// let sum = 0;
// for(const odd of oddArray){
// sum = sum + odd;
// }
// //console.log(sum);
// const count = oddArray.length
// //console.log(count);
// const average = sum / count;
// return average;

// }


// const numbers = [4,5, 15, 16, 17, 18, 19, 20, 21];
// const result = numbersOfArray(numbers);
// console.log('This is the average of odd numbers', result);


// const betonList = ['atal', 'partho', 'almas', 'forhad', 'rakib', 'partho', 'atal', 'murad'];

// function noDublicate (array){
//     //console.log(array);
//     const unique = [];
//     for(const name of array){
//         //console.log(name);
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const result = noDublicate(betonList);
// console.log(result);

// const  today = new Date();
// const date =  new Date('2062-10-09')
// console.log(today);
// console.log(date.getMonth());
// console.log(date.getDay());
// const specialDate =  new Date(2091, 0, 26);
// console.log(specialDate);
// specialDate.setMonth(10);
// console.log(specialDate.toLocaleString());
// console.log(specialDate.toLocaleString('en-GB'));

// // unix epoc