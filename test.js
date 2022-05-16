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

function turnCasesToArray(cases) {
  let caseArr = [];
  if (typeof cases === "string") {
    caseArr.push(cases);
  }
  if (typeof cases === "object") {
    let caseArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (i = 0; i < cases.length; i++) {
      for (j = 0; j < orderCasePrecedence.length; j++) {
        if (cases[i] === orderCasePrecedence[j].case) {
          caseArr.splice(
            orderCasePrecedence[j].order,
            1,
            orderCasePrecedence[j].case
          );
        }
      }
    }
    for (i = 0; i < caseArr.length; i++) {
      if (typeof caseArr[i] === "number") {
        caseArr.splice(i, 1);
        i--;
      }
    }
    return caseArr;
  }
}

console.log(turnCasesToArray(["lower", "pascal", "upper", "kebab", "camel"]));



function turnCasesToArray(cases) {
  let caseArr = [];
  if (typeof cases === "string") {
    caseArr.push(cases);
  }
  if (typeof cases === "object") {
    let caseArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (i = 0; i < cases.length; i++) {
      for (j = 0; j < orderCasePrecedence.length; j++) {
        if (cases[i] === orderCasePrecedence[j].case) {
          caseArr.splice(
            orderCasePrecedence[j].order,
            1,
            orderCasePrecedence[j].case
          );
        }
      }
    }
    for (i = 0; i < caseArr.length; i++) {
      if (typeof caseArr[i] === "number") {
        caseArr.splice(i, 1);
        i--;
      }
    }
  }
  console.log(caseArr);
  return caseArr;
}
