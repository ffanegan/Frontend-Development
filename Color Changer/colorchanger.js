//

var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

// const rgb = document.getElementById("button_main");

// <button id="button_main" onclick="update()">Click to change RGB!</button>

function update() {

    const rgb = document.getElementById("rgb");

    // Changes the background according to random vaules from global variables:
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // Code below is used to update color values:
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    // Updates rgb text:
    rgb.textContent = `rgb(${red}, ${green}, ${blue})`
}