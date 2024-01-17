'use strict';

let favNumString = prompt("Input your favourite numbers after a comma (min 10 numbers):");
let favNum = favNumString.split(',').map(Number);
function compareNumbers(a, b) {
  return a - b;
}

favNum.sort(compareNumbers);
alert('Your numbers is : ' + favNum);

favNum.splice(1, 3);
alert('Your new string is: ' + favNum)

