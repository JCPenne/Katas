const north = 0
const east = 1;
const south = 2;
const west = 3;

let dF = north;

let startObj = 
  east : 0,
  north: 0
;


const resetObj = () => {
  startObj = {
    east: 0,
    north: 0
  }
  dF = north;
}

const blocksAway = (directions) => {
  resetObj();
  for (i in directions) {
    if (dF === north && directions[i] === "right") {
        dF = east;
    } else if (dF === north && directions[i] === "left" && startObj.east !== 0) {
        dF = west;
      }
      else if (dF === north && directions[i] === "left" && startObj.east === 0) {
        dF = north;
      }
      else if (dF === east && directions[i] === "left") {
        dF = north;
      }
      else if (dF === east && directions[i] === "right" && startObj.north !== 0) {
        dF = south;
      }
      else if (dF === east && directions[i] === "right" && startObj.east === 0) {
        dF = east;
      }
      else if (dF === south && directions[i] === "left") {
        dF = east;
      }
      else if (dF === south && directions[i] === "right" && startObj.east !== 0) {
        dF = west;
      }
      else if (dF === south && directions[i] === "right" && startObj.east === 0) {
        dF = south;
      }
      else if (dF === west && directions[i] === "right") {
        dF = north;
      }
      else if (dF === west && directions[i] === "left" && startObj.north !== 0) {
        dF = south;
      }
      else if (dF === west && directions[i] === "left" && startObj.east === 0) {
        dF = west;
      }
      else if (dF === north && typeof directions[i] === 'number') {
        startObj.north += directions[i];
      }
      else if (dF === east && typeof directions[i] === 'number') {
        startObj.east += directions[i];
      }
      else if (dF === south && typeof directions[i] === 'number') {
        startObj.north -= directions[i];
      }
      else if (dF === west && typeof directions[i] === 'number') {
        startObj.east -= directions[i];
      }
      
  }
  return startObj;
};
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
