let sumLargestNumbers = (array) => {
  let x = 0;
  let y = 0;
  for (let i of array) {
    if (i > x) {
      x = i;
    }
  }
  for (let j of array) {
    if (j > y && j < x) {
      y = j;
    }
  }
  return x + y;
}

console.log(sumLargestNumbers([0,10,100]));
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));