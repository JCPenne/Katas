const PI = 3.14159 ;

function sphereVolume(radius) {
  let sVolume = (4/3 * PI * (radius*radius*radius));
  return Math.floor(sVolume);
};
function coneVolume(radius,height) {
  let cVolume = (PI * (radius * radius) * (height / 3));
  return Math.floor(cVolume);
};
function prismVolume(height,width,depth) {
  let pVolume = ((width * depth) * height);
  return Math.floor(pVolume);
};

function totalVolume(solids) {
  let total = 0;
  for (i = 0; i < solids.length; i++) {
    if (solids[i].type === 'sphere') {
      total += (sphereVolume(solids[i].radius));
    } else if (solids[i].type === 'cone') {
      total += (coneVolume(solids[i].radius,solids[i].height));
    } else if (solids[i].type === 'prism') {
      total += (prismVolume(solids[i].height,solids[i].width,solids[i].depth));
    }
  }
  return total;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const prism = {
  type: 'prism',
  height: 5,
  width: 10,
  depth: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone,
  prism
]

console.log(totalVolume(duck));

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);