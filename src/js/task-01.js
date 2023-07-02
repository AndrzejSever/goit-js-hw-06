
const itemNamber = document.querySelector('#categories').children
console.log(itemNamber)
 console.log(`Number of categories : ${itemNamber.length}`);

 

const items = document.querySelectorAll('.item');
items.forEach(function (item, index) {
  const category = item.querySelector('h2').textContent; 
  const elements = item.querySelectorAll('li').length; 
  console.log(`Category: ${category}, Elements: ${elements}`);
});



