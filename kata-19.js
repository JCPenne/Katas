//Function to create an 8x8 nested Array;

const createBoard = () => {
  let arr = []
  let jString = '';
  
  for (j = 0; j < 8; j ++) {
    jString += 0;
  }
  for (i = 0; i < 8; i++) {
    arr.push(Array.from(jString));
  }

  return arr
}
//Create global variable to allow access to board Array;

let board = createBoard();
//Function to splice board array with White Queen's position

const whiteQP = (whiteQueen) => {
  let x = whiteQueen[1];
  let y = whiteQueen[0];
  board[y].splice([x],1,'1')
  return board
}
//Function to splice board array with Black Queen's position

const blackQP = (blackQueen) => {
  let x = blackQueen[1];
  let y = blackQueen[0];
  board[y].splice([x],1,'1')
  return board
}
/* Function passes variables whiteQueen and blackQueen, runs whiteQP and blackQP with respective arguments
and returns the final generated board */
const generateBoard = (wQ,bQ) => {
  whiteQP(wQ);
  blackQP(bQ);
  finalBoard = board.join('\n');

  return finalBoard;
}
// Function to determine if each queen is a threat to the other
const queenThreat = (board) => {
  let threat = false;
  let threatBoard = board;
  let wqp = whiteQueen;
  let bqp = blackQueen;
  let diagcol = Math.abs(wqp[0] - bqp[0])
  let diagrow = Math.abs(wqp[1] - bqp[1])
  
  if ((wqp[0] === bqp[0]) || (wqp[1] === bqp[1])) {
  threat = true;
  } else if (diagcol === diagrow) {
    threat = true;
    }
  return threat
} 
let whiteQueen = [7,0];
let blackQueen = [3,4];
let generatedBoard = generateBoard(whiteQueen,blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));