function conditionalSum (array, condition) {
  result = 0;
  for (i in array) {
    switch (condition) {
      case 'even':
        if (array[i] % 2 === 0) {
          result += array[i]
        }
      break;
      case 'odd':
        if (array[i] % 2 !== 0) {
          result += array[i]
        }
      break;
    }
  }
return result;


}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));