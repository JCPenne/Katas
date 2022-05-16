removeWhiteSpace = (message) => {
  a = ''
  for (i in message) {
    message[i] !== ' ' ? a += message[i] : a += ''
  };
  return a
};
createRange = (message) => {
  arr = [];
  noSpaces = removeWhiteSpace(message);
  sqrt = Math.sqrt(Math.round(noSpaces.length));
  for (i = 0; i < sqrt; i++) {
    arr.push(i);
  }
  return arr;
};
createColumns = (message) => {
  str = ''
  message = removeWhiteSpace(message);
  let range = createRange(message);
  let l = range.length;
  for (i = 0; i < message.length; i += l) {
    for (j = 0; j < l; j++) {
      if ((j + i) < message.length) {
        str += message[j + i]
      }
    }
    str += '\n';
  }
  str = str.slice(0,-1).split('\n');
return str;
}
squareCode = (message) => {
  const msg = createColumns(message);
  console.log(msg);
  let result = '';

  for (j = 0; j <= msg.length; j++) {
    for (i = 0; i < msg.length; i++) {
      if (msg[i][j] !== undefined) {
      result += msg[i][j]
      }
    }
    result += ' '
  }
  return result;
}
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
