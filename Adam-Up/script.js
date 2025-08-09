var num = document.getElementById("num");
// var tally = document.getElementById("tally").innerHTML;

console.log(num + 3)

function addTask() {
    //Add a whole value to the number on every click
    num.innerHTML = Number(num.textContent) + 1
}

function press_enter() {
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("add").click();
        }
    })}

function reset() {
    num.innerHTML = 0
}

// function addTask2() {
//     //Add a whole value to the number on every click
//     tally =+ tally

// }

// function reset2() {
//     num = 0
// }