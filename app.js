const body = document.querySelector(".bgDiv")
const clickButton = document.querySelector(".btn-click")
const mouseOver = document.querySelector(".btn-over")
const colorInput = document.querySelector("#colorInput")
const colorText = document.querySelector("#colorText")


function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
    colorInput.value = color;
    colorText.textContent = `${color.toUpperCase()}`

}

clickButton.onclick = function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    changeBackgroundColor(randomColor)
}


mouseOver.onmouseover = function (){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    changeBackgroundColor(randomColor)
}

