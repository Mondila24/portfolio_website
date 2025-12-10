const about = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
let aboutColor = '#';
for(let i = 0; i < 6; i++){
  aboutColor += about[getRandomNumber()];
}
color.textContent = aboutColor;
document.body.style.backgroundColor = aboutColor
});
 
function getRandomNumber(){
    return Math.floor(Math.random() * about.length);
}