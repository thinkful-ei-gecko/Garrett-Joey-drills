'use strict';
let numbers1 = [5,7,4,9,2,1,4,];
function maxNumber(array){
  let max = array[0];
  let i = 1;
  while (i < array.length) {
    if (array[i] > max) {
      max = array[i];
    }
    i++;
    
  }
  return max;
}
maxNumber(numbers1);

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

function filter(arr,fn) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
   console.log(arr.length)
    if(fn(arr[i])){
      newArr.push(arr[i]);  
    }
  }
  return newArr;
}
filter(myNames);

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES