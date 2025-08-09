function clearDisplay(){
    document.getElementById("bill").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("tip_display").value = "";
    document.getElementById("display").value = "";
}

function calculate(){
    //brings in element IDs and gets their value
    const bill = parseFloat(document.getElementById("bill").value);
    const tip = parseFloat(document.getElementById("tip").value);
    //Converts tip into percentage
    x = tip * 0.01;
    //Only calculate the tip (tip% * bill)
    document.getElementById("tip_display").value = `$${(x * (bill)).toFixed(2)}`;
    //Finally calculates the total with tip
    try{
        total_value = bill + ((bill*10) * x)/10;
    }
    catch($NaN){
        document.getElementById("display").value = "Error";
    }
    document.getElementById("display").value = `$${total_value.toFixed(2)}`;
    console.log(x)
}
