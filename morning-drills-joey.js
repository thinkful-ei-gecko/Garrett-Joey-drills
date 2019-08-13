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
