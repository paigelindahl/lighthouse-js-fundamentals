const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for(let i = 0; i < recipes.length; i++) {
    let ingredient = recipes[i].ingredients;
    function ingredientCheck(bakery, ingredient){
      for(let k = 0; k < bakery.length; k++){
        console.log(bakery[k]);
        if (ingredient.includes(bakery[k])) {
          return true;
        }
      }
    }
   if(ingredientCheck(bakeryA, ingredient) && ingredientCheck(bakeryB, ingredient)){
     return recipes[i].name;
   }
  }
  }


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

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
