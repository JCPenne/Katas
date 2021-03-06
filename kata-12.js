/*  bA = Bakery A 
    bB = Bakery B 
    r = Recipe
*/
function chooseRecipe (bA,bB,r) {
  let recipeName = '';
  
  for (i = 0; i < r.length; i++) {
    for (j = 0; j < bA.length; j++) {
      if (r[i].ingredients.includes(bA[j])) {
        recipeName = 'true'
      } else {
        recipeName = 'false';
        }
    }
  };
  
  for (i = 0; i < r.length; i++) {
    for (j = 0; j < bB.length; j++) {
      if (recipeName === 'true' && r[i].ingredients.includes(bB[j])) {
        recipeName = r[i].name
      }
    }
  };


  return recipeName
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

 console.log(chooseRecipe(bakeryA,bakeryB,recipes));

 bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));