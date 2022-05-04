function squareCode (message) {
  let a = message.replace(' ','')
  let length = a.length;
  let b = Math.ceil(Math.sqrt(length));
  let result = '';
  let counter = 0;

  result = toString(a.match(/.{1,3}/g));
  console.log(result);



};
console.log(squareCode("chill out"));