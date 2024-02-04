// Homework 1

// function findNumber(array, type) {
//   let result = [];
//   for (let num of array) {
//     if (type === "even" && num % 2 === 0) {
//       result.push(num);
//     }
//     else if (type === "odd" && num % 2 !== 0) {
//       result.push(num);
//     }
//   }
//   return result;
// }


// Homework 2 

// function joinStrings(array) {
//   let result = "";
//   for (let i = 0; i < array.length; i++) {
//     result += array[i] + " ";
//   }
//   return result.trim();
// }
// let example = ["Hello", "there", "students", "of", "SEDC", "!"];
// let output = joinStrings(example);
// console.log(output); 


// Homework 3 

// let num = "";
// for (let i = 1; i <= 20; i++) {
//   num += i;
//   if (i % 2 == 0) {
//     num += "\n";
//   } else {
//     num += " ";
//   }
// }

// console.log(num);



// Homework 4

// let arr = [3, 5, 6, 8, 11];
// let arr2 = [3, "bye", true, 6, 8, 11, true, '4'];

// function sumMaxMin(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//   }
//   return max + min;
// }

// console.log(sumMaxMin(arr)); 
// console.log(sumMaxMin(arr2));



// Homework 5

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
let full = getFullNames(first, last);

function getFullNames(firstNames, lastNames) {
  let fullNames = [];
  for (let i = 0; i < firstNames.length; i++) {
    let lastName = lastNames[i];
    let fullName = (i + 1) + ". " + firstNames[i] + " " + lastName;
    fullNames.push(fullName);
  }
  return fullNames;
}

console.log(full); 



  

