
const button = document.querySelector('#value');
let counterValue = 0

const clickEvent = document.getElementById('counter')
clickEvent.addEventListener('click', event => {
  const action = event.target.dataset.action;
  
  if (action === 'increment') {
    counterValue += 1;
  } else if (action === 'decrement') {
    counterValue -= 1;
  }
  
  button.textContent = counterValue;
});








