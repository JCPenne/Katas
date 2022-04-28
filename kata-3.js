const numberOfVowels = (data) =>  {
  let testArray = ['a','e','i','o','u'];
  let total = 0;

  for (element of data) {
    for (element2 of testArray) {
      if (element === element2) {
        total += 1;
      }
    }
  }
  return total;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));