function reverseArray(arr) {
  var i = 0;
  while (i < arr.length - 1) {
    arr.splice(i, 0, arr.pop());
    i++;
  }
  return arr;
}

// Useage:
var arr = [1, 2, 3];
console.log(reverseArray(arr)); // [3, 2, 1]

//---------

const array = [1, 2, 3, 4, 5, 6, 'taco'];

function reverse(array) {
  return array.map((item, idx) => array[array.length - 1 - idx]);
}

//------------------

function reverseArr(input) {
  var ret = new Array();
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
}

var a = [3, 5, 7, 8];
var b = reverseArr(a);

console.log(ret);
