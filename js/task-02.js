const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const cluster = [];

 ingredients.forEach(function callback(element, index) {

 

   const nowIngrediens = document.createElement('li');
   nowIngrediens.classList.add('item');
   nowIngrediens.textContent = ingredients[index];
  
   cluster.push(nowIngrediens);

});

const nowChaild = document.querySelector('#ingredients');
nowChaild.append(...cluster);