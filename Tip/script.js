let display = document.getElementById("display");
let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
// const go = document.getElementById("go");

// function appendToDisplay(input){
//     display.value = total;
// }

// go.addEventListener("click", calculate);


function dollarsign(input){
    // document.getElementById("bill").value = "$" + input;
    document.getElementById("bill").value = `$${input}`;
}

function clearDisplay(){
    document.getElementById("display").value = "";
    document.getElementById("bill").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("tip_display").value = "";
}

function calculate(){
    bill = parseInt(document.getElementById("bill").value);
    tip = parseInt(document.getElementById("tip").value);
    var display = document.getElementById("display").value;
    x = tip * 0.01;
    document.getElementById("tip_display").value = `$${(x * (bill*10))/10}`;
    total_value = bill + ((bill*10) * x)/10
    document.getElementById("display").value = `$${total_value.toFixed(2)}`;
    try{
        document.getElementById("display").value = `$${bill + (bill * x)}`;
    }
    catch{
        document.getElementById("display").value = "Error";
    }
}

console.log((256.2399.toFixed(2)))

// function calculate(){
//     let bill = document.getElementById("bill");
//     let tip = document.getElementById("tip");
//     try{
//         display.value = (bill.value * tip.value) + bill.value
//     }
//     catch(error){
//         display = "Error";
//     }
// }

// console.log((100 * 0.15) + 100)