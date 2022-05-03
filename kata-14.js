function calculateChange (total, cash) {
  let remainder = (cash - total);
  const changeValues = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  let changeCounter = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };
  for (let i in changeValues) {
    while (remainder - changeValues[i] >= 0) {
      remainder -= changeValues[i];
      changeCounter[i] += 1;
    }
  }
  for (let j in changeCounter) {
    if (changeCounter[j] === 0) {
      delete changeCounter[j]
    }
  }
  return changeCounter;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));