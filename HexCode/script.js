const element = document.querySelector(".square");

var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);