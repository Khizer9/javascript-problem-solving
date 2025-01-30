// Write a JavaScript function that takes a number n as input and prints all even numbers from 1 to n.
// Example Input: n = 10
// Expected Output: 2, 4, 6, 8, 10

// function evenNumber (n) {
//     for(let i = 1; i <= n; i++){
//       if(i % 2 === 0){
//         console.log(i)
//       }
//     }
//   }
  
//   evenNumber(10) // Output: [2, 4, 6, 8, 10]


// Write a JavaScript function that prints numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
// Example Input: n = 15

// function fizzBuzz (n) {
//     for(let i = 1; i <= n; i++){
//       if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz')
//       }else if(i % 3 === 0){
//         console.log('Fizz')
//       }else if(i % 5 === 0){
//         console.log('Buzz')
//       }else {
//         console.log(i)
//       }
//     }
//   }
  
//   fizzBuzz(15)


// Write a JavaScript function that takes a number n and returns the sum of its digits. For example, for n = 123, the sum of digits would be 1 + 2 + 3 = 6.
// Example Input: n = 1234


// function sumOfNum (n) {
//   const strNum = n.toString()
//   let sum = 0;
//   for(let i = 0; i < strNum.length; i++){
//     sum =  sum + Number(strNum[i])
//   }
//   return sum
// }

// function sumOfNum (n){
//     const numArr = n.toString().split('').reduce((acc, cur) => Number(acc) + Number(cur))
//     console.log(numArr)
//   }
//   console.log(sumOfNum(1234))


// Write a JavaScript function that checks whether a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
// madam => true 

// function checkPalindrom (str){
//   for(let i = 0; i < Math.floor(str.length/2); i++){
//     if(str[i] !== str[str.length - 1 - i]){
//       return false
//     }
//     return true
//   }
// }

// function checkPalindrom (str){
//     const reversedStr = str.split('').reverse().join('')
//     return str === reversedStr ? true : false
// }
// console.log(checkPalindrom("madam"))
  

// Write a JavaScript function that takes an array of numbers and returns the largest number in the array.
// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9
  
// function largestNum (numArr){
//     let maxNum = numArr[0];
//     for(let i = 0; i < numArr.length; i++){
//       if(numArr[i] > maxNum){
//         maxNum = numArr[i]
//       }
//     }
//         console.log(maxNum)
//   }
  
// largestNum([1, 5, 3, 9, 2]) // 9


// Also, taking secondHighest number from the array
// output: 5

// function largestNum (numArr){
//     let maxNum = numArr[0];
//     let secondHighest = Infinity;
//     for(let i = 0; i < numArr.length; i++){
//       if(numArr[i] > maxNum){
//         secondHighest = maxNum
//         maxNum = numArr[i]
//       }else if(numArr[i] > secondHighest && numArr[i] !== maxNum){
//         secondHighest = numArr[i]
//       }
//     }
//         console.log(maxNum)
//         console.log(secondHighest)
//   }
  
//   largestNum([1, 5, 3, 9, 2]) // 5



// Write a JavaScript function that takes an array of numbers and returns the sum of all even numbers in the array.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12 (because 2 + 4 + 6 = 12)

// function evenNumAdd(numArr) {
//     const addEven = numArr.filter((item) => item % 2 === 0).reduce((acc,cur) => acc + cur)
//     console.log(addEven)
//   }
  
//   evenNumAdd([1, 2, 3, 4, 5, 6])
  
// function evenNumAdd(numArr) {
//     let sum = 0;
//     for (let i = 0; i < numArr.length; i++) {
//       if (numArr[i] % 2 === 0) {
//         sum += numArr[i];
//       }
//     }
//     console.log(sum);
//   }
  
//   evenNumAdd([1, 2, 3, 4, 5, 6]);  // Output: 12



// Write a JavaScript function that counts how many times a specific value appears in an array.
// Input: ([1, 2, 3, 2, 2, 4], 2)
// Output: 3 (because 2 appears 3 times in the array)

// function occArr (numArr, num){
//     let count = 0;
//     for(let i =0; i < numArr.length; i++){
//       if(numArr[i] === num){
//         count++
//       }
//     }
//     return count;
//   }
//   console.log(occArr([1, 2, 3, 2, 2, 4], 2)) 
//   console.log(occArr([1, 1, 1, 1, 1], 1)) 

// Another way
// function occArr(numArr, num) {
//     const count = numArr.filter(item => item === num).length;
//     return count;
//   }
  
//   console.log(occArr([1, 2, 3, 2, 2, 4], 2));  // Output: 3
//   console.log(occArr([1, 1, 1, 1, 1], 1));    // Output: 5



// Write a function that flattens a nested array (an array of arrays) into a single-level array.
// Input: [[1, 2, 3], [4, 5], [6]]
// Output: [1, 2, 3, 4, 5, 6]

// function flattenArr (arr) {
//     console.log(arr.flat())
//   }
  
// flattenArr([[1, 2, 3], [4, 5], [6]])

// Another way
// function flattenArr(arr) {
//     let result = [];
    
//     arr.forEach(item => {
//       if (Array.isArray(item)) {
//         result = result.concat(flattenArr(item));  // Recursively flatten arrays
//       } else {
//         result.push(item);  // Push non-array items directly
//       }
//     });
    
//     return result;
//   }
  
//   console.log(flattenArr([[1], [2, [3, [4]]]]));
//   // Output: [1, 2, 3, 4]
  


// Write a function that takes a string and returns the longest word in the string. If there are multiple words with the same longest length, return the first one.
// Input: "I love programming in JavaScript"
// Output: "programming"

// function longestWord(sentence) {
//     const words = sentence.split(" ");
//     let maxWord = words[0]; // Initialize with the first word
  
//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length > maxWord.length) {
//         maxWord = words[i]; // Update maxWord if a longer word is found
//       }
//     }
    
//     console.log(maxWord); // Output the longest word
//   }
  
//   longestWord("I love programming in JavaScript");