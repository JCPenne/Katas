const conditionalSum = (values,condition) => {
  let sum = 0;

  if (condition === 'even') {
    for (let element of values) {
      if (element % 2 === 0) {
      sum += element;
      }
    }
  } else {
      for (let element of values) {
        if (element % 2 !== 0) {
          sum += element;
        }
      }
  } 
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));