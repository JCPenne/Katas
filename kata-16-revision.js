// object to store all the cases, their priorities and related functions

const createCaseTypes = () => ({
  'camel':  {
  priority: 0,
  func: camelCase
  },
  'pascal': {
  priority: 1,
  func: pascalCase
  },
  'snake': {
  priority: 2,
  func: snakeCase
  },
  'kebab':  {
    priority: 3,
    func: kebabCase
  },
  'title':  {
    priority: 4,
    func: titleCase
  },
  'vowel':  {
    priority: 5,
    func: vowelCase
  },
  'consonant':  {
    priority: 6,
    func: consonantcase
  },
  'upper':  {
    priority: 7,
    func: upperCase
  },
  'lower':  {
    priority: 8,
    func: lowerCase
  }
});

// function to order the array of cases
const caseOrder = (cases, caseTypes) => {
  return typeof cases === 'string' ? [cases] : [...cases].sort((a,b) => caseTypes[a].priority - caseTypes[b].priority)
};
const makeCase = (input, cases) => {
  const caseTypes = createCaseTypes();
  const sortedCases = caseOrder(cases,caseTypes)

  let finalStr = input;
  for (const caseStr of sortedCases) {
    finalStr = caseTypes[caseStr].process(finalStr)
  };
};




// create individual case functions here






// console.log(makeCase("this is a string", 'camel'));
// console.log(makeCase("this is a string", ['camel','upper']));