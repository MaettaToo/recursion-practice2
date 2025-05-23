// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, output = 1) {
  //I: function takes one param repped as num and default param 
  //O: return the product of all positive integers less than or equal to n
  //C: none
  //E: return null for negative numbers,
  //base
  // conditional stmt if  n strictly equals 0
  if(n === 0){
    //return output
    return output;
    };
    // conditional stmt if n  is less than zero(negative) return null 
  if(n < 0 ){
    return null;
  };
  

// recursion
//multiply output times n
output *= n;
//invoke function using return 
return factorial(n-1, output);
 
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
//I: function takes an array of integers as param
//O: return a number representing sum 
//C: none
//E: input arrays are empty, input arrays have one integer,have negative integers or mixed positive and negative integers 
var sum = function(array, output = 0) {
  //base
  // conditional stmt determine if array is empty using length property
  if(array.length === 0){
    // return output
    return output;
  }
  //conditional stmt determine if array has one element using length property and output is zero
  if(array.length === 1 && output === 0 ){
    // return first index of array
   return array[0];
  }// conditional stmt if array is empty and output is zero 
  if(array.length === 0 && output === 0){
    //return 0
    return 0;
  }
 
  //recursion
  //add output to first index of array
  output += array[0];
  //invoke function changing input value to start at the next index
  return sum(array.slice(1), output);

};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
//I: function takes a number as param 
//O: return the boolean true if number is even, false if odd
//C: cannot use modulo %
//E:work with negative numbers

var isEven = function(n, output = 0) {
  //create a positive number for n 
  n = Math.abs(n);
  //base
  //conditional stmt n strictly equal to zero
  if(n === 0){
    //return true
    return true;
  }
  //conditional stmt n strictly equals 1
  if(n === 1){
    //return false
    return false;
  }
  //recursion
  //invoke function subtracting 2 from n 
  return isEven(n - 2);

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45 10+9+8+7+6+5+4+3+2+1
// sumBelow(7); // 21
//I: function takes number as param
//O: number that is the sum of all the integers below the input number
//C:none
//E:none
var sumBelow = function(n, output = 0) {
  //base
  //conditional stmt if n strictly equal 0
  if(n === 0){
    //return zero
    return 0;
  }// conditional stmt n-1 strictly zero
  if(n - 1 === 0){
    //return output
    return output;
    // conditional stmt  n plus one srictly equals zero 
    } else if (n + 1 === 0){
      //return output
    return output;
 }
  //recursion
  //conditional stmt n is greater than zero (positive )
  if( n > 0){
    // output should add the results of n minus one 
  output += n - 1;
  //start  recursion invoke function using n-1 and output  
  return sumBelow(n - 1, output);
  } //conditional stmt n is less than zero (negative)
   if(n < 0){
      output += n + 1; // output should add the results of n plus one 
      //start  recursion invoke function using n+1 and output as params
      return sumBelow(n + 1, output);
  }
 
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
//I: function takes param of 2 numbers
//O: return an array of numbers that are between the two input number
//C: none
//E: should return empty array if no integers in range,
var range = function(x, y, output = []) {
  //base
  //conditional stmt x strictly to y 
if(x === y){
  // return empty array
  return [];
}//conditional stmt x plus one  strictly to y 
  if(x + 1 === y){
    //return output
    return output;
    //conditional stmt x minus one  strictly to y
  } else if(x - 1 === y){
    //return output
    return output;
    
  }

  //recursion
  // conditional stmt determine if x is less than y 
  if(x < y){
    //add x plus one to the output array
    output.push(x + 1)
    //start recursion invoke funcion using x plus one, y and default param output
    return range(x + 1, y, output)
    // conditional stmt determine if x is greater than y 
  } else if(x > y){
    //add x  minus one to the output array
    output.push(x - 1);
    //start recursion invoke funcion using x minus one, y and default param output
    return range(x - 1, y, output)

  }
  //console.log(range[2, 9]);test
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, output = 1) {
  //I: function takes two numbers represented as base and exp default param output = 1
  //O: return the number of the base mutiplied by itself for exp number of times 
  //C: cannot use complex math
  //E: exp is 1 or exp is 0, or exp is negative
  //base
  // conditional stmt  if exp strictly equals 0
  if( exp === 0){
    // return output
    return output;
  }//conditional stmt  if exp strictly equals 0
  if(exp === 1){
    // multiply output times base and reassign results to output 
    output *= base;
    //return output 
    return output;
  }
  
 
  //recursion
 // use conditional stmt to determine if exp is negative or positive 
  if (exp < 0){ 
    // if negative assign a variable to contain results of turning base into a fraction (1 divided by base)
     let negBase2 =(1 / base);
     // assign output the results of multiplyin output by negbase2, confining decimals to 5 places and ensure return number
     output = (output *= negBase2).toFixed(5) * 1;
    //start recursion invoke function using base, exp + 1( add until exp becomes one or zero ) output
    return exponent (base, exp + 1, output);
  }
  else{// exp is positive 
    output*= base // multiply output by base 
    //start recursion invoke function using base, exp - 1( subtract until exp becomes one or zero ) output
    return exponent(base, exp - 1, output);
  }
   

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, output = 1) {
  //I: function takes one param number
  //O: return boolean true or false if the input number is a power of two
  //C: none
  //E: if n is zero, n is 1  
  // base

  // conditional test if n === 0 then return false 
  if ( n === 0){
    return false}
    // conditional stmt if n strictly equals one then return true   
    if (n === 1){
      return true}    

     //recursion 
  // start recursion invoke func using n divided by 2 as parameter
    return powerOfTwo(n / 2)
  };



// 9. Write a function that accepts a string a reverses it.
//I: function takes two params input string and default param empty string
//O: function should return input string in reverse 
//C: no mutatiion of input string
//E: none
var reverse = function(string, output = '') {
  //base
  //conditional stmt if string is empty then return output
  if(string.length === 0){
    return output; 
  };
  //recursion
  // add the last value of the string to the ouput variable using += and slice  
  output += string.slice(-1);
  // init recursion invoke function using the input string with the last value removed and output as params
 return  reverse(string.slice(0, -1), output)
};

// 10. Write a function that determines if a string is a palindrome.
//I: function takes a string as param 
//O: return boolean true if inut string is palindrome, false if it is not
//C: none 
//E: spaces and capital letters 
var palindrome = function(string) {
  // use regex to remove all spaces from string,use to lowercase to turn string to lower
  const reString = string.replace(' ', '').toLowerCase();
  
  //base
  // return false if first index does not match  
  if( reString[0] !== reString.slice(-1)){
    return false;
  };
  // when string length is zero or one  return true 
 if(reString.length === 0 || reString.length === 1){
  return true;
 };

  //recursion
   // conditional stmt to compare first index ih last index of string 
   if (reString[0] === reString.slice(-1)){
    // start recursion invoke function removing first index and last 
      return palindrome(reString.slice(1, -1))
   }
   
};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, output = 0) {
  
  
    if(y === 0){
      return output;
    };
    
    if( y > 0){
      output += x;
        return multiply(x, y - 1, output);
    }
    if(y < 0 && x < 0){
      output += -x;
        return multiply(x, y + 1, output);
    }
    
  };
  

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //I: function takes two params repped as string
  //O: return boolean true if strings are identical 
  //C: none
  //E: none 
  //base
  // function stops when returns true, returns true when both strings are empty
  if(str1.length === 0 && str2.length === 0){
    return true;
   }
   // function returns false if index at str 1 does not match index 1 at str 2
  if(str1[0] !== str2[0]){
    return false;
  }

  // recursion
  //init conditional stmt if first index of string 1 strictly equals first index of string 2 start recursion 
  if(str1[0] === str2[0]){
  return compareStr(str1.slice(1), str2.slice(1));
  };
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){
  //I: function accepts a string as param and empty array as default param
  //O: return input string as an array with each index of string as an index in the array
  //C: none
  //E: needs to be in exact same order
  //base
  // when string  length is zero
  if(str.length === 0){
    // return final results 
    return output;
  }
  //recursion
  // push the first index of sring to the output array
 output.push(str[0]);
 // start recursion invoke function  slicing the first index off the string  with ouput as params 
  return createArray(str.slice(1), output);
};//test
console.log(createArray('hello'));// ['h','e','l','l','o']

//17. reverse array
var reverseArr = function(str, output = []){
  //I: function accepts a string as param and empty array as default param
  //O: return input string as an array with each index of string as an index in the array
  //C: none
  //E: needs to be in reverse order
  //base
  // when string  length is zero
  if(str.length === 0){
    // return final results 
    return output;
  }
  //recursion
  // unshift the first index of sring to the output array
 output.unshift(str[0]);
 // start recursion invoke function  slicing the first index off the string  with ouput as params 
  return reverseArr(str.slice(1), output);
};//test
console.log(reverseArr('hello'));// ['h','e','l','l','o']

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
  //I: function takes three param, first param is unknown value to fill array, 2nd param is number indicating length, default param empty array
  //O: return an array with the unknown value as the index repeated until length is met
  //C: none
  //E: if input value is undefined 
  //base 
  // if length strictly equals 0
  if(length === 0){
    //return output
    return output;   
  };
  // recursion 
  // push value into the array
  output.push(value);
  //start recursion invoke function 
  return buildList(value, length - 1 , output);  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
//I: function takes 3 params, array, unknown value, default parameter repped as number
//O: return number that represents the number of times input value appears in the array
//C: none
//E: none 
  var countOccurrence = function(array, value, output = 0) {
    //base
    //recursion stops when array is empty
    if(array.length === 0){
      return output;
    }
    //recursion
    //conditional stmt if first index of array strictly equals value 
    if(array[0] === value){
      // count plus 1
      output += 1;
    }
    // start recursion invoke function return the array with first index removed, value and output 
    return countOccurrence(array.slice(1), value, output);
  };


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
    //I: function takes 3 params input array, callback function, default parameter repped as array
  //O: return a new array with the input array changed by the callback function
  //C: cannot use native methods 
  //E: must not mutate the original array, 
  //base
  // recursion ends when array is empty;
  if(array.length === 0){
    //return output
    return output 
  };
  //recursion
  //invoke callback on each element of the array
  let results = callback(array[0]);
  //push the results into the output array 
  output.push(results);
  return rMap(array.slice(1), callback, output);

};
console.log(rMap([1,2,3], function(n){ return n * 2 }))///246
  

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
   //I: function takes a param repped as a number indicating the location of the requested number in the array 
  //O: return the number in the fibonacci array were input number is located 
  //C: non
  //E: 0 should return zero, and negative numbers should return null 
  // base 
  //if n is less than zero(negative) return null
  if(n < 0){
    return null;
    }// if n strictly equals zero return zero
   if (n === 0)
        return 0;
      // if n === 1 return one
    if (n === 1)
        return 1;
  
  
  //recursion 
  // start recursion invoke function on nthFibo (n-1) and nthFibo (n-2)
  return nthFibo(n - 1) + nthFibo(n - 2);
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
   //I: function takes two params input, array of words and default param of output
  //O: return an array of the input array capitalized 
  //C: none
  //E: all letters must be capitalized 
  //base
  // recursion ends when array is empty 
  if(input.length === 0){
    //return output 
    return  output
  }
    //recursion
  // push the firts index capitalized into the output array
    output.push(input[0].toUpperCase());
  // recursion begins invoke function using ouput and the input array slicing the first index
    return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
    //I: function takes two params array of strings and default param of output
  //O: return an array of the input array capitalized 
  //C: none
  //E: all first letters must be capitalized 
  //base
  // recursion ends when array is empty 
  if(array.length === 0){
    //return output 
    return  output
  }
    //recursion
  // push the firts index capitalized into the output array
    output.push(array[0][0].toUpperCase() + array[0].slice(1));
  // recursion begins invoke function using ouput and the input array slicing the first index
    return capitalizeFirst(array.slice(1), output);
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //I: function takes two params input string and default prameter repped as object
  //O: return object with the letters of the string as keys  and the number of times they appear ast the values
  //C: none
  //E: none
  //base
  // recursion ends when string is empty
  if(str.length === 0){
    return obj;
    }
  //recursion 
  // determine if key exists in property 
   if (!obj.hasOwnProperty(str[0])){
      // add the key to the object if key does not exist  
      obj[str[0]] = 1;
        // if property exist count the value 
      } else if(obj.hasOwnProperty(str[0])){
        obj[str[0]] += 1; 
      }
      
        // start recursion invoke function with string with first index removed and obj 
  return letterTally (str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
    //console.log(list, output);
    //I: function takes an array as input, default param as array 
    //O: returns an array with consecutive duplicates removed 
    //C: order cannot be changed 
    //E: none 
    //base
    //recursion ends when array is empty 
    if(list.length === 0){
      return output;
      }
    //recursion
    // conditional stmts, look at the first index of the array and the second index if they do not match 
    // push the first index into the output array
    if(list[0] !== list[1]){
      
     output.push(list[0]);
   } // start recursion invoke function with first index removed from array and output 
    return compress(list.slice(1), output);
  };


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output = []) {
  //I: function takes an array of numbers as input, default param as array 
  //O: returns an array with consecutive zeros removed 
  //C: order cannot be changed 
  //E: none 
    //base
    //recursion ends when array is empty 
    if(array.length === 0){
      return output;
      }
    //recursion
  //look at the first index of the array and the second index push the first index into the output array
  if(array[0] !== array[1]){
    output.push(array[0]);
  }
  
  // start recursion invoke function with first index removed from array and output 
    return minimizeZeroes(array.slice(1), output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output = [], count = 0) {
  //I: function takes 3 params, an array of numbers,default param repped as empty array, default param repped as 0  to initiate determination if index is even or odd 
//O: return an array of input array numbers with the numbers alteranating between positive an negative regardless     
//of original sign
//C: array must start with positive numbers 
//E: none
//base
//conditional stmt recursion ends when array length and output length are equal
if(array.length === output.length){
  // return output 
  return output; 
}

//recursion
//conditional stmt if count is even 
if(count % 2 === 0){
  // push positive integer into output array using Math abs
  output.push(Math.abs(array[count])); 
} //if count is odd push negative integer to the output array using - math abs 
else if( count % 2 !== 0){
  output.push(-Math.abs(array[count]));
}

// start recursion invoke function using input array, output array, and count +1 as params
return alternateSign(array, output, count + 1);

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, output = [], count = 0) {
    //I:function takes 3 params, str(string), default param output empty array, count repped as num used to continue recursion
    //O: return input string with numerals replaced with word string equivalents 
    //C: none 
    //E: none
   // split string into array
  const strArray = str.split(' ');
  //console.log(strArray);
    //base
    // recursion should end when strArray length is strictly equal to output length,
    if(strArray.length === output.length){
      // return string 
      //console.log('ken');
      return output.join(' ');
    }
      
     //recursion 
      // use switch determine number and to change num to text
      switch (strArray[count]){
          
          case '0': output.push("zero");
                    break;
          case '1': output.push("one");
                    break;
          case '2': output.push("two");
                    break;
          case '3': output.push("three");
                    break;
          case '4': output.push("four");
                    break;
          case '5': output.push("five");
                    break;
          case '6': output.push("six");
                    break;  
          case '7': output.push("seven");
                    break;
          case '8': output.push("eight");
                    break;
          case '9': output.push("nine");
                    break;
          default : output.push(strArray[count]);
   
    }
     // invoke function using converted array, output array and count as params 
    return numToText(str, output, count + 1)
    
  };
console.log(numToText("I have 5 dogs and 6 ponies")); // "I have five dogs and six ponies"
    
    
    
    
    


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------