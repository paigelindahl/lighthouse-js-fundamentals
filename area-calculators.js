const calculateRectangleArea = function (length, width) {
  if(length < 0 || width < 0){
    return undefined;
  }
  let rectangleArea = length * width;
  return rectangleArea;
}
const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0){
    return undefined;
  }
  let triangleArea = base * height / 2;
  return triangleArea;
}
const  calculateCircleArea = function (radius) {
  if (radius < 0){
    return undefined;
  }
  let circleArea = Math.PI * Math.pow(radius, 2);
  return circleArea;
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); 