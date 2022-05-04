function logLargestNumber(array) {
  x = 0;
  for (i of array) {
   i > x ? x = i : x = x;
  }
  return x;
};
function logSecondLargestNumber(array) {
  y = 0;
  for (i of array) {
    (i > y && i < x) ? y = i : y = y;
  }
  return y;
}

const sumLargestNumbers = (array) => {
  return logLargestNumber(array) + logSecondLargestNumber(array);
}

console.log(sumLargestNumbers([0,10,100]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));