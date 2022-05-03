const organizeInstructors = function (instructors) {
  let program = {};
  for (let i of instructors) {
    if (!program[i.course]) {
      program[i.course] = [];
    }
    program[i.course].push(i.name)
  }
  return program
};


console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));