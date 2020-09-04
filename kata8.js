let result= ' ';
const multiplicationTable = function (maxValue) {
  for (y =1; y <= maxValue; y++) {
    for(let x = 1; x <= maxValue; x++) {
      if( x === maxValue) {
        result += (x*y) + '\n';
      } else {
        result += (x*y);
      }
    }
    
  }return result;
}
console.log(multiplicationTable(10));