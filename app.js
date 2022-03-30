const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color")

btn.addEventListener("click", function(){
   // first I want to finger out what is my target
   console.log(document.body)
   
   // then get random number between 0 - 3 (because our colors array has a length of 4)
   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}