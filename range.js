
const lastIndexOf = function (arr, num) {
  let result;
  let foundMatch = false;
  for(let i = arr.length - 1; i >= 0; i --){
    if (arr[i] === num) {
      result = i;
      foundMatch = true;
      break;
    } 
  } if (foundMatch) {
    return result;
  } else {
    return -1;
  }

  
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
