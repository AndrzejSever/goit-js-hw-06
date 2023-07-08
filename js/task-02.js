const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function callback(element, index) {
  const nowIngrediens = document.createElement('li')
  nowIngrediens.classList.add('item')
nowIngrediens.textContent = ingredients[index]
console.log(nowIngrediens)

const nowChaild = document.querySelector('#ingredients')
nowChaild.append(nowIngrediens)

});


