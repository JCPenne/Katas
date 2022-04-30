const multiplicationTable = maxValue => {
  result = '';
  arr = [];

  for (let i = 1; i <= maxValue; i++) {
    result += '\n';
    for (let j = 1; j <= maxValue; j++) {
    result += i * j + ' ';
    }
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));