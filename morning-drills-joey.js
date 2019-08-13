'use strict';
let numbers1 = [5,7,4,9,2,1,4,];
function maxNumber(array){
  let max = array[0];
  let i = 1;
  while (i < array.length) {
    if (array[i] > max) {
      max = array[i];
    }
    //i += 1;
    
  }
  return max;
}
maxNumber(numbers1);

array.forEach()