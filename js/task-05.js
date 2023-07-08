
const wayImput = document.querySelector('#name-input');

const waySpan = document.querySelector('#name-output');

wayImput.addEventListener("input", (event) => {
  waySpan.textContent = event.currentTarget.value;
});

    
   console.log(wayImput) 
