
// we are going to set up a loop to generate a hex color on the fly
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// step-1: I am going to select the html element
const btn = document.getElementById("btn")

const color = document.querySelector(".color")

// step-2: add an event listener
btn.addEventListener("click", function(){
    let hexColor = '#';
    // index 0 - 5
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumver()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumver(){
    return Math.floor(Math.random() * hex.length)
}