const camelCase = (input) => {
  let result = '';
  let char = input.split(' ');
  
  for (let i = 0; i < char.length; i++) {
    if (i !== 0) {
      result += char[i].charAt(0).toUpperCase() + char[i].slice(1);
    } else {
      result += char[i].toLowerCase();
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));