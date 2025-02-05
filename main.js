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



// Write a function that takes a string as input and returns the string reversed.
// reverseString("hello"); // Output: "olleh"
// reverseString("JavaScript"); // Output: "tpircSavaJ"

// function reversedStr(str) {
//   const revStr = str.split("").reverse().join("")

//   console.log(revStr)
// }

// function reversedStr(str){
//     let result = "";
//     for(let i = str.length - 1 ; i >=0; i--){
//       result = result + str[i]
//     }
//       console.log(result)
//   }
  
//   reversedStr("hello") //"olleh"



// Write a function that checks if a number is prime. (prime number means jo sirf 1 aur khud se divisible ho)
// isPrime(7); // Output: true (7 is a prime number)
// isPrime(10); // Output: false (10 is not a prime number)


// function isPrime(num) {
//     if (num <= 1) return "Not a prime number"; // Numbers <= 1 are not prime
//     if (num === 2) return "Prime number"; // 2 is the only even prime number
  
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return "Not a prime number"; // Found a divisor
//       }
//     }
  
//     return "Prime number"; // No divisors found
//   }
  
//   console.log(isPrime(10)); // Output: "Not a prime number"
//   console.log(isPrime(7));  // Output: "Prime number"
//   console.log(isPrime(1));  // Output: "Not a prime number"
//   console.log(isPrime(2));  // Output: "Prime number"
  


// Question: Find Factorial of a Number
// Write a function to calculate the factorial of a given number.
// The factorial of a number n is the product of all positive integers less than or equal to 𝑛.
// For example: 
// The factorial of 5 is 5*4*3*2*1 = 120

// function factorialNum (num) {
//     let result = 1
//     for(let i = 1;i<=num; i++){
//       result = result * i
//     }
//     console.log(result)
//   }
  
//   factorialNum(5)


// Write a function that generates the first n numbers of the Fibonacci sequence.

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. For example:
// Fibonacci sequence for n = 7: [0, 1, 1, 2, 3, 5, 8]

// function fibonciSeries(num){
//     const initialArr = [0, 1]
//     for(let i = 1; i < num - 1; i++ ){
//       initialArr.push(initialArr[i] + initialArr[i - 1])
//     }
//     return initialArr
//   }
  
//   fibonciSeries(7)
  
  

// Given an array of n-1 integers in the range from 1 to n, find the missing number. The array contains no duplicates, and exactly one number is missing from the sequence.

// For example:
// Input: [1, 2, 4, 5, 6]
// Output: 3

// function missingNum(numArr) {
//     let resultVal;
//     for (let i = 0; i < numArr.length - 1; i++) {
//       if (numArr[i + 1] !== numArr[i] + 1) {
//         resultVal = numArr[i] + 1;
//       }
//     }
//     return resultVal;
//   }
  
//   console.log(missingNum([1, 2, 4, 5, 6])); // 3



// Two strings are anagrams if they contain the same characters, but the characters may be rearranged. For example, "listen" and "silent" are anagrams.

// Write a function isAnagram(str1, str2) that checks whether str1 is an anagram of str2.
// console.log(isAnagram("listen", "silent"));  // true
// console.log(isAnagram("hello", "world"));    // false

// function isAnagram(str1, str2){
//     let str1Occ = {};
//     for(let i = 0; i < str1.length; i++){
//       if(!str1Occ[str1[i]]){
//         str1Occ[str1[i]] = 1
//       }else {
//         str1Occ[str1[i]]++
//       }
//     }
  
//     let str2Occ = {};
//     for(let i = 0; i < str2.length; i++){
//       if(!str2Occ[str2[i]]){
//         str2Occ[str2[i]] = 1
//       }else {
//         str2Occ[str2[i]]++
//       }
//     }
  
//     for (let char in str1Occ) {
//       if (str1Occ[char] !== str2Occ[char]) {
//         return false;
//       }
//     }
  
//     return true;
  
//   }
  
//   console.log(isAnagram("listen", "silent"))



// Write a function to find the most frequent element in an array.
// If there are multiple elements with the same frequency, return any one of them.
// example:
// mostFrequent([1, 3, 2, 1, 4, 1, 2, 3, 2, 2]) // 2
// mostFrequent(["a", "b", "a", "c", "a", "b", "b"]) // "b"


// function mostFreq (numArr) {
//     const occ = {};
//     for(let i = 0; i < numArr.length; i++){
//       if(!occ[numArr[i]]){
//         occ[numArr[i]] = 1
//       }else {
//         occ[numArr[i]]++
//       }
//     }
//     const numVal = Object.values(occ);
//     const maxVal = Math.max(...numVal);
  
//     for(let char in occ){
//       if(occ[char] === maxVal){
//         return char
//       }
//     }
//   }
  
//   console.log(mostFreq([1, 3, 2, 1, 4, 1, 2, 3, 2, 2])) // 2



// Ek array diya gaya hai, usme se second most frequent element ko find karein.
// Example:

// function mostFreq(numArr) {
//     const occ = {};
//     for (let i = 0; i < numArr.length; i++) {
//       if (!occ[numArr[i]]) {
//         occ[numArr[i]] = 1;
//       } else {
//         occ[numArr[i]]++;
//       }
//     }
//     console.log(occ);
//     const occVals = Object.values(occ);
//     let maxNum = 0;
//     let secondHighest = 0;
//     for (let i = 0; i < occVals.length; i++) {
//       if (occVals[i] > maxNum) {
//         secondHighest = maxNum;
//         maxNum = occVals[i];
//       } else if (occVals[i] > secondHighest && occVals[i] !== maxNum) {
//         secondHighest = occVals[i];
//       }
//     }
  
//     for (let key in occ) {
//       if (occ[key] === secondHighest) {
//         return key;
//       }
//     }
//   }
  
//   console.log(mostFreq([1, 3, 2, 1, 4, 1, 2, 3, 2, 2]));


// Write a function that takes two arrays as input and returns an array of their intersection.
// The intersection includes only elements that are present in both arrays (without duplicates).
// Example:
// console.log(findIntersection([1, 2, 2, 1], [2, 2])); // Output: [2]
// console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]


// function intersectionArr(arr1, arr2) {
//     let resultArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j] && !resultArr.includes(arr1[i])) {
//           resultArr.push(arr1[i]);
//         }
//       }
//     }
//     return resultArr;
//   }
  
//   intersectionArr([4, 9, 5], [9, 4, 9, 8, 4]); // [4, 9]
  


// Write a function that takes an array of numbers as input and returns a new array with all the duplicate numbers removed,
// without using any built-in Set or similar data structure.
// removeDuplicates([1, 2, 2, 3, 4, 5, 5, 6]) 
// should return [1, 2, 3, 4, 5, 6]

// function removeDuplicates(arr) {
//     const resultedArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!resultedArr.includes(arr[i])) {
//         resultedArr.push(arr[i]);
//       }
//     }
  
//     return resultedArr;
//   }
  
//   removeDuplicates([1, 2, 2, 3, 4, 5, 5, 6]);
  


// Write a function longestSubstring that finds the length of the longest substring without repeating characters in a given string.
// longestSubstring("abcabcbb")  // Should return 3 ("abc")
// longestSubstring("bbbbb")  // Should return 1 ("b")
// longestSubstring("pwwkew")  // Should return 3 ("wke")


// function longestSubString(str) {
//     let resultStr = [];
//     let maxLength = 0;
  
//     for (let char of str) {
//       while (resultStr.includes(char)) {
//         resultStr.shift(); 
//       }
  
//       resultStr.push(char); 
//       maxLength = Math.max(maxLength, resultStr.length);
//     }
  
//     return maxLength;
//   }
  
//   console.log(longestSubString('pwwkew')); // Should return 3
  

// Write a function findPairs that takes an array of integers and a target sum. 
// The function should return all unique pairs of numbers from the array that add up to the target sum.
// Example:
// findPairs([2, 4, 3, 5, 7, 8, 9], 10);
// Output: [[3, 7], [2, 8]]


// function findPairs(numArr, target) {
//     const resultedArr = [];
//     for (let i = 0; i < numArr.length; i++) {
//       for (let j = i + 1; j < numArr.length; j++) {
//         if (numArr[i] + numArr[j] === target) {
//           resultedArr.push([numArr[i], numArr[j]]);
//         }
//       }
//     }
//     return resultedArr;
//   }
  
//   findPairs([2, 4, 3, 5, 7, 8, 9], 10); // [[3, 7], [2, 8]]



// Write a function that takes a string as input and returns all possible permutations of the string's characters.
// findPermutations("abc"); 
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]

// findPermutations("ab"); 
// Output: ["ab", "ba"]

// function findPermutations(str) {
//     // Base case: If string has 1 character, return it as the only permutation
//     if (str.length === 1) {
//       return [str];
//     }
  
//     const permutations = [];
  
//     // Loop through each character in the string
//     for (let i = 0; i < str.length; i++) {
//       const currentChar = str[i];
//       const remainingStr = str.slice(0, i) + str.slice(i + 1);
  
//       // Recursively find permutations of the remaining substring
//       const remainingPermutations = findPermutations(remainingStr);
  
//       // Add the fixed character to each of the permutations of the remaining substring
//       for (let perm of remainingPermutations) {
//         permutations.push(currentChar + perm);
//       }
//     }
  
//     return permutations;
//   }
  
//   // Example usage:
//   console.log(findPermutations('abc'));
//   // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
  

// Write a function that takes a string as input and returns the first character that does not repeat. If all characters repeat, return null.
// Input: "swiss"
// Output: "w"


// function nonRepeatingAlp (str) {
//     const freq = {};
  
//     for(let i = 0; i < str.length; i++){ // occurance of each character
//       if(!freq[str[i]]){
//         freq[str[i]] = 1
//       } else {
//         freq[str[i]]++
//       }
//     }
  
//     for(let char of str){
//       if(freq[char] === 1){ // find ki jiski value 1 hai wo return kra
//         return char
//       }
//     }
//   }
  
//   console.log(nonRepeatingAlp("swiss")) // w


// Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string, case-insensitive.
// Example:
// Input: "Hello World"
// Output: 3 (Explanation: The vowels are e, o, o.)

// function countVowels(str) {
//     const vowels = 'aeiou';
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(countVowels('Hello World')); // 3



// Write a function that takes a sentence (a string) and returns the longest word in it.
// If there are multiple words with the same maximum length, return the first one.
// console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "quick"
// console.log(longestWord("Hello world")); // "Hello"
// console.log(longestWord("A small step for man, a giant leap for mankind")); // "mankind"

// function longestWord (str) {
//     const splittedWord = str.split(" ")
    
//     let maxWord = splittedWord[0];
//     for(let word of splittedWord){
//       if(word.length > maxWord.length){
//         maxWord = word
//       }
      
//     }
//     console.log(maxWord)
//   }
  
//   longestWord("The quick brown fox jumps over the lazy dog")
//   longestWord("Hello world") // "Hello"
//   longestWord("A small step for man, a giant leap for mankind") // "mankind"



// Write a function moveZeroesToEnd that takes an array of numbers as input and
// moves all zeroes to the end of the array while keeping the order of non-zero elements intact.
// moveZeroesToEnd([0, 1, 0, 3, 12]);
// [1, 3, 12, 0, 0]


// function moveZerosToEnd(numArr) {
//     const resultArr = [];
//     let countZeros = 0;
  
//     for (let i = 0; i < numArr.length; i++) {
//       if (numArr[i] === 0) {
//         countZeros++;
//       } else {
//         resultArr.push(numArr[i]);
//       }
//     }
//     for (let i = 0; i < countZeros; i++) {
//       resultArr.push(0);
//     }
//     return resultArr;
//   }
  
//   console.log(moveZerosToEnd([0, 1, 0, 3, 12]))
  


// Write a function to rotate an array k times to the right.
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5, 1, 2]
// console.log(rotateArray([1, 2, 3], 4)); // Output: [3, 1, 2]|

// function rotateArray(arr, k) {
//     for (let i = 0; i < k; i++) {
//       const lastNum = arr.pop();
//       arr.unshift(lastNum);
//     }
//     console.log(arr);
//   }
  
//   rotateArray([1, 2, 3, 4, 5], 2); // Output: [4, 5, 1, 2, 3]


// Write a function to find all the prime numbers between 1 and a given number n.
// Input: findPrimes(10)
// Output: [2, 3, 5, 7]

// function findPrimes(num) {
//     const primeNums = [];
    
//     for (let i = 2; i <= num; i++) {
//       let isPrime = true;
  
//       // Check if 'i' is divisible by any number from 2 to sqrt(i)
//       for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }
  
//       if (isPrime) {
//         primeNums.push(i);
//       }
//     }
  
//     console.log(primeNums);
//   }
  
//   findPrimes(10); // [2, 3, 5, 7]
  