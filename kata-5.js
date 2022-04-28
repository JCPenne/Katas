const urlEncode = (text) => {
  let char = ''
  for (i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
    char += text[i];
    } else {
      char += '%20';
    }
  }
  return char;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));