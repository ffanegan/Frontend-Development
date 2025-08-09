var r = document.querySelector('.circular-progress circle.fg');
var timeDisplay = parseFloat(document.getElementById("time_display").value);


function reset(){
    document.getElementById("time_display").value = "";
}


function updateTime() {
    
    // r.style.setProperty('--time', );
    console.log(timeDisplay.value)
}

let timer = null; //holds id of set interval
let startTime = 0; //
let elapasedTime = 0; //Placeholders
let isRunning = false;// will toggle to true when running and false to stop

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime; //Date.now() = epic
        timer = setInterval(update, 10);
        isRunning = true;
        console.log(timeDisplay);
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
