let newString = ' ';
const camelCase = function (input) {
  for ( i = 0; i < input.length; i ++) {
    if (input[i] !== ' ') {
        newString += input[i];
    } else if (input[i] === ' '){
      newString += input[i+1].toUpperCase();
      i++;
    }
  } return newString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));