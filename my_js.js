let isButtonClicked = false; 
let text = document.querySelectorAll(".textProperty");
for(let i = 0; i < text.length; i++){
    text[i].style.color = "black";
}
let animation = document.getElementById("screen");
animation.style.backgroundColor = "black";
let firstText = document.querySelector("#firstText");
firstText.innerHTML = "Screen is Currently Off";
let secondText = document.querySelector("#secondText");
secondText.innerHTML = "Please Press The Button Below To Load The Screen!";
firstText.style.color = "green";
secondText.style.color = "green";
let lightBars = document.querySelectorAll(".lightBar");
let button = document.querySelector("#button");
button.addEventListener("click", ()=>{
    for(let i = 0; i < lightBars.length; i++){
        lightBars[i].style.display = "block";
    }
    animation.style.animation = "load 2s linear forwards";
    animation.style.backgroundColor = "lightgreen";
    firstText.style.color = "black";
    secondText.style.color = "black";
    firstText.innerHTML = "Welcome To My Portfolio";
    secondText.innerHTML = "Hi There! This is my portfolio, where you will be able to view and observe who I am.";
}) 

  
