let longestName = {name: '', course: ''};
const instructorWithLongestName = function(instructors) {
  for (i = 0; i < instructors.length; i++){
    if(instructors[i].name.length > longestName.name.length) {
      longestName = instructors[i];
    }
  } return longestName;
}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));