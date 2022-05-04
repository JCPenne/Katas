



function makeCase (input, cases) {
  finalResult = '';
  caseArray = [];

  if (typeof cases === 'string') {
    caseArray.push(cases);
  } else if (typeof cases === 'object') {
    for (i in cases) {
      caseArray.push(cases[i])
    }
  }

  function camelHelper () {
    let char = input.split(' ');
    let camelResult = '';
    for (i = 0; i < char.length; i ++) {
      if (i != 0) {
        camelResult += char[i].charAt(0).toUpperCase() + char[i].slice(1);
      } else {
        camelResult += char[i].toLowerCase();
      }
    }
    return camelResult;
  };
  
  function upperHelper () {
    finalResult = input.toUpperCase();
    return finalResult}

  for (i = 0; i <= caseArray.length; i ++) {
    if (caseArray[i] === 'camel') {
      finalResult = camelHelper(input);
    } else if (caseArray[i] === 'upper') {
      finalResult = upperHelper(input);
      }
      return finalResult;
    }
};
console.log(makeCase("this is a string", ['camel','upper']));
console.log(makeCase("this is a string", 'upper'));
