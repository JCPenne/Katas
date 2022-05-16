const orderCasePrecedence = [
  { case: "camel", order: 0 },
  { case: "pascal", order: 1 },
  { case: "snake", order: 2 },
  { case: "kebab", order: 3 },
  { case: "title", order: 4 },
  { case: "vowel", order: 5 },
  { case: "consonant", order: 6 },
  { case: "upper", order: 7 },
  { case: "lower", order: 8 },
];

function splitInitialString(string) {
  let splitString = string.split(" ");
  return splitString;
}
function turnCasesToArray(cases) {
  let arrOfCases = [];
  if (typeof cases === "string") {
    arrOfCases.push(cases);
  }
  if (typeof cases === "object") {
    arrOfCases = cases;
  }
  return arrOfCases;
}
function orderCases(cases) {
  let caseArr = turnCasesToArray(cases);
  let finalArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  for (i = 0; i < caseArr.length; i++) {
    for (j = 0; j < orderCasePrecedence.length; j++) {
      if (caseArr[i] === orderCasePrecedence[j].case) {
        finalArr.splice(
          orderCasePrecedence[j].order,
          1,
          orderCasePrecedence[j].case
        );
      }
    }
  }
  for (i = 0; i < finalArr.length; i++) {
    if (typeof finalArr[i] === "number") {
      finalArr.splice(i, 1);
      i--;
    }
  }
  return finalArr;
}

function applyCases(string, cases) {
  const splitString = splitInitialString(string);
  let casedString = "";
  switch (cases) {
    case "camel":
      for (i = 0; i < splitString.length; i++) {
        i === 0
          ? (casedString += splitString[i])
          : (casedString +=
              splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
      }
      break;
    case "pascal":
      for (i = 0; i < splitString.length; i++) {
        casedString +=
          splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
      }
      break;
    case "snake":
      for (i = 0; i < splitString.length; i++) {
        i !== splitString.length - 1
          ? (casedString += splitString[i] + "_")
          : (casedString += splitString[i]);
      }
      break;
    case "kebab":
      for (i = 0; i < splitString.length; i++) {
        i !== splitString.length - 1
          ? (casedString += splitString[i] + "-")
          : (casedString += splitString[i]);
      }
      break;
    case "title":
      for (i in splitString) {
        casedString +=
          splitString[i].charAt(0).toUpperCase() +
          splitString[i].slice(1) +
          " ";
      }
      break;
    case "vowel":
      for (i in string) {
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
          ? (casedString += string[i].toUpperCase())
          : (casedString += string[i]);
      }
      break;
    case "consonant":
      for (i in string) {
        string[i] !== "a" &&
        string[i] !== "e" &&
        string[i] !== "i" &&
        string[i] !== "o" &&
        string[i] !== "u"
          ? (casedString += string[i].toUpperCase())
          : (casedString += string[i]);
      }
      break;
    case "upper":
      {
        casedString = string.toUpperCase();
      }
      break;
    case "lower":
      for (i = 0; i < string.length; i++) {
        casedString += string[i].toLowerCase();
      }
      break;
  }
  return casedString;
}
function returnFinalString(string, cases) {
  let S = string;
  const caseArray = orderCases(cases);
  caseArray.forEach((element) => (S = applyCases(S, element)));
  return S;
}

console.log(returnFinalString("this is a string", "camel"));
console.log(returnFinalString("this is a string", "pascal"));
console.log(returnFinalString("this is a string", "snake"));
console.log(returnFinalString("this is a string", "kebab"));
console.log(returnFinalString("this is a string", "title"));
console.log(returnFinalString("this is a string", "vowel"));
console.log(returnFinalString("this is a string", "consonant"));
console.log(returnFinalString("this is a string", "upper"));
console.log(returnFinalString("this is a string", "lower"));
console.log(returnFinalString("this is a string", ["upper", "snake", "pascal"]));
