'use strict';

function max(numbers) {
  let max = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    i++;
  }
  return max;
}

function min(numbers) {
  let min = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  }
  return min;
}

function average(numbers) {
  let total = 0;
  numbers.forEach(num => {
    total += num;
  });
  return total/numbers.length;
}



function repeat(fn,n){
  let i = 0;
  while(i < n){ fn();}
  i++;
}
repeat(hello,5);



function filter(arr, fn) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i])){
      newArray.push(arr[i]);  
    }
  }
  return newArray;
}


// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

filter(myNames, function(name) {console.log(name)});

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}"`);
    console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);

  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const waterWarning = hazardWarningCreator('Water on the Road');
const mudWarning = hazardWarningCreator('Mud on the Road');

rocksWarning('Main St and Pacific Ave');
waterWarning('Centinela Ave and Olympic Blvd');
mudWarning('Hyde st and Main st');

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const movements = turtleMoves.filter(movePair => movePair[0] >= 0 && movePair[1] >= 0);

const steps = movements.map(steps => steps[0] + steps[1]);

steps.forEach((val , i) => {
  console.log(`Movement ${index +1}: ${val} steps`);
});
