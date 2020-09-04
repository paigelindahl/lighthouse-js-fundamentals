let newString; 
const urlEncode = function(text) {
  for (i = 0; i < text.length; i ++ ) {
    newString = text.replace(/ /g, '%20');
    }
  return newString;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));