// let randomNumber = Math.floor(Math.random() * 5);

var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

const rgb = document.getElementById("button_main");

// console.log(green);

function update() {

    const rgb = document.getElementById("rgb");

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    rgb.textContent = `rgb(${red}, ${green}, ${blue})`
}

// function rgb() {
    
// }