
const items = document.querySelectorAll('.item');

console.log(`Number of categories : ${items.length}`);
 
items.forEach(function (item, index) {
 
  const category = item.querySelector('h2').textContent; 
  const elements = item.querySelectorAll('li').length; 
  console.log(`Category: ${category}, Elements: ${elements}`);
});



