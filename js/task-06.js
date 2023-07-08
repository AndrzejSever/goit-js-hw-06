


const wayImput = document.querySelector("#validation-input")
console.log(wayImput)


  

wayImput.addEventListener("blur", () => {
   
const expectedLength = parseInt(wayImput.getAttribute('data-length'))
console.log(expectedLength)
const enteredValue = wayImput.value.trim()
console.log(enteredValue)
const isValid = enteredValue.length === expectedLength;
console.log(isValid)
   if (isValid) {
        wayImput.classList.remove('invalid');
        wayImput.classList.add('valid');
      } else {
        wayImput.classList.remove('valid');
        wayImput.classList.add('invalid');
      }
  
});


 