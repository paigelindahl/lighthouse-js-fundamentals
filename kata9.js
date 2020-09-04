let endVolume = 0;
const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4/3)*PI*(Math.pow(radius, 3));
  
}

const coneVolume = function (radius, height) {
  return (1/3)*PI*(Math.pow(radius, 2))* height;
  
}

const prismVolume = function (height, width, depth) {
  return height*width*depth;
  
}

const totalVolume = function (solids) {
  for( let solid of solids) {
  if (solid.type === 'sphere') {
    endVolume += sphereVolume(solid.radius);
  } else if (solid.type === 'cone') {
    endVolume += coneVolume(solid.radius, solid.height);
  } else if (solid.type === 'prism') {
    endVolume += prismVolume(solid.height, solid.width, solid.depth);
  }
  }
  return endVolume;
}
const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(totalVolume(duck));