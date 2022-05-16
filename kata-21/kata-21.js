let prompt = require("prompt-sync")({sigint: true});

let number = Math.round(Math.random() * 100);
let counter = 1;
let checker = false;
let previousAnswer = 0

while (!checker) {
  let answer = prompt("Guess a number: ");
  let isnum = /^\d+$/.test(answer);
  if (isnum === true) {
    answer = Number(answer);
  };
  switch (true) {
    case answer === number:
    console.log(`You got it! You took ${counter} attempts!`);
    checker = true;
      break;
    case (answer > number) && (typeof answer === 'number') && (answer !== previousAnswer):
    console.log("Too High!");
    counter += 1;
      break; 
    case answer < number && (typeof answer === 'number') && (answer !== previousAnswer):
    console.log("Too Low!");
    counter += 1;
      break;
    case typeof answer !== 'number':
    console.log("Not a number! Try again!");
      break;
  }
  previousAnswer = answer
};