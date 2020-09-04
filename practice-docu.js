
function sumLargestNumbers (data) {
  sortedData = data.sort(function(a, b) {
    return b-a; })  
    console.log( 'The two largest numbers summed are ' + (sortedData[0] + sortedData[1])); 
    };
    
      
  
    



      console.log(sumLargestNumbers([1, 2, 3]));
