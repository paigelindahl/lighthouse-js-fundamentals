let result = ' ';
const repeatNumbers = function (data) {
  for(let i = 0; i < data.length; i++) {
    let number1 = data[i][0];
    let number2 = data[i][1];
    for(let j =0; j < number2; j++) {
      result += number1;    
  }  if (i < data.length-1) {
    result += ', ';
}
  }
    return result;
}
console.log(repeatNumbers([[1, 10]]));