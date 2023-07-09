


const wayImput = document.querySelector("#validation-input")
  

wayImput.addEventListener("blur", () => {
   
const expectedLength = parseInt(wayImput.getAttribute('data-length'))

const enteredValue = wayImput.value.trim()

const isValid = enteredValue.length === expectedLength;

   if (isValid) {
        wayImput.classList.remove('invalid');
        wayImput.classList.add('valid');
      } else {
        wayImput.classList.remove('valid');
        wayImput.classList.add('invalid');
      }
  
});


 