function makeCase (input, cases) {
  let result = '';
  let char = input.split(' ');
  
  cases = [].concat(cases);


  for (h = 0; h < cases.length; h++) {
    for (i = 0; i < char.length; i ++) {
      switch (cases[h]) {
        case 'camel':
          let camelResult = '';
          if (i != 0) {
            camelResult += char[i].charAt(0).toUpperCase() + char[i].slice(1);
          } else {
            camelResult += char[i].toLowerCase();
          }
          return camelResult;
        break;
        case 'pascal':
          result += char[i].charAt(0).toUpperCase() + char[i].slice(1);
        break;
        case 'snake':
          if (i != 0) {
            result += '_' + char[i];
          } else {
            result += char[i];
          }
        break;
        case 'kebab':
          if (i != 0) {
            result += '-' + char[i];
          } else {
            result += char[i];
          }
        break;
        case 'title':
            result += char[i].charAt(0).toUpperCase() + char[i].slice(1) + ' ';
        break;
        case 'vowel':
          if (i != 0) {
            char[i] = ' ' + char[i];
          }
          for (j = 0; j < char[i].length; j ++) {
          switch (char[i][j]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              result += char[i][j].toUpperCase();
            break;
            default:
              result += char[i][j].toLowerCase();
          }
          }
        break;
        case 'consonant':
          if (i != 0) {
            char[i] = ' ' + char[i];
          };
          for (k = 0; k < char[i].length; k ++) {
          switch (char[i][k]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              result += char[i][k].toLowerCase();
            break;
            default:
              result += char[i][k].toUpperCase();
          }
          }
          break;
        case 'upper':
          if (i != 0) {
            char[i] = ' ' + char[i];
          };
          result += char[i].toUpperCase();
        break;
        case 'lower':
          if (i != 0) {
            char[i] = ' ' + char[i];
          };
          result += char[i].toLowerCase();
        break;
        }
    }
  }
  return result;
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ['snake', 'upper']));





