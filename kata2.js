let sum = 0;
const conditionalSum = function (values, condition) {
  for (let i =0; i < values.length; i++) {
    if (condition === 'even' && values[i] % 2 === 0) {
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 !== 0) {
      sum += values[i];
  
    }
  } 
  return sum;
}

