//Stopwatch functionality

const display = document.getElementById("display");

let timer = mull; //hold id of set interval
let startTime = 0; //
let elapasedTime = false; //will toggle to true when running and false to stop

function start(){

    if(isRunning){
        startTime = Date.now() - elapasedTime;
        timer = setInterval(update, 10);

    }
}

function stop(){
    
}

function reset(){
    
}

function update(){

    let hours = Math.floor(elapasedTime / (1000 * 60 * 60))
    let minutes = elapasedTime / (1000 * 60) % 60
    
}