// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result



// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  let greeting = 'Hello, ' + name;
  //return text "Hello, " and user input string for name
  return greeting;
}
// Remember to call the function to test
console.log( 'in helloName:  ' + helloName('phil'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}

console.log( 'in addNumbers (5+4=9:) ' + addNumbers( 5 , 4 ) ) ; // 9

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2 ){
  let multiplyThree = num0 * num1 * num2;
  //return multiplied value of three user input numbers when run
  return multiplyThree;
}

console.log( 'in multiplyThree (2*4*5=40:) ' + multiplyThree( 2, 4, 5 ) ) ; // 40

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise 
function isPositive( number ) {
  if ( number > 0 ){
    //if number is greater than zero will return true
    return true;
  }
  else{
    //if number is lower than zero will return false
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let names = ['phil', 'monica', 'fred', 'matt'];

function getLast( array ) {
  if ( array.length > 0 ) {
    //returns last element in array
    return array.slice(-1);
  }
  else {
    //if array is empty, returns undefined
    return 'undefined';
  }
}

console.log( 'in getLast (matt): ' + getLast( names ) ) ; // matt

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  for ( let i = 0; i <= array.length; i++ ) {
    if ( value === array[i] ) {
      return true;
    }
  }
  return false;
}

console.log( 'in find searching for monica should return true: ' + find( 'monica', names ) ) ; // true
console.log( 'in find searching for mike should return false: ' + find( 'mike', names ) ) ; // false
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  //checks character at beginning of string using charAt()
  if ( string.charAt([0]) === letter ) {
    return true;
  }
  else { 
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

let numbers = [ -2, 2, 4, 6, 8, 10, 3, 4]; 

function sumAll( array ) {
  let sum = 0
  
  // TODO: loop to add items
  for ( let number of numbers ) {
    sum += number;
  }

  return sum; //25
}

console.log(`in sumAll adding values from numbers array expected answer 35: ${sumAll(numbers)}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


function positiveNumbers( array ){
  let posNumbers = 0; //used to count how many positive numbers

  for ( let i = 0; i < array.length; i++ ) {
      if ( array[i] > 0 ){
        console.log(array[i]);
        posNumbers++;
      }
  }
//once the for loop finishes, if there were no positive numbers
//an empty array will be returned
  if ( posNumbers === 0 ) {
    return array = [];
  }
}

//console.log(`in positive Numbers, expected result 2 4 6 8 10: ${positiveNumbers(numbers)}`);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//From codewars
//create a function that takes a string of words
//any word in the string with 

function spinWords( string ) {
  const sentence = string.split(' ');
  let newSentence = '';

  for (let i = 0; sentence[i]; i++ ){
    //variable that counts length of array element
    let length = sentence[i].length;
    if ( length >= 5 ) {
      //if word >= 5 letters it will be split into array with each letter becoming single element
      //those elements are then reversed, and joined again
      sentence[i] = sentence[i].split('').reverse().join('');
    }
  }
  //joins all elements of array into string with a space between each
  return sentence.join(' ');
}  

console.log(`in spinWords: ${spinWords('I enjoyed this challenge!')}`);