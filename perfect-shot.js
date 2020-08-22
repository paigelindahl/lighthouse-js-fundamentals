const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let coordinates = [0,0];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north'){
      coordinates[1] += 1;
    } else if ( moves[i] === 'west'){
      coordinates[0] -= 1;
    } else if (moves[i] === 'east') {
      coordinates[0] += 1;
    } else if (moves[i] === 'south') {
      coordinates[1] -= 1;
    }
  }
  return coordinates;
}
console.log(finalPosition(moves));