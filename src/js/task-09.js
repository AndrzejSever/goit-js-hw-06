function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBackground  = document.body
console.log(changeBackground)

const spanBackground = document.querySelector('span.color')
console.log(spanBackground)

const buttonBackground = document.querySelector('button.change-color')
console.log(buttonBackground)


buttonBackground.addEventListener("click", backgroundColorStyle)

function backgroundColorStyle() {
  
    changeBackground.style.backgroundColor = getRandomHexColor()
    spanBackground.textContent = getRandomHexColor()

}




 