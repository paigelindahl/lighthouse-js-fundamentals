let numVow = 0;
const numberOfVowels = function(data) {
  for (i = 0; i < data.length; i ++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] ==='o' || data[i] ==='u') {
      numVow += 1; 
    }
  } return numVow;
}
