const input_box = document.getElementById("input_box");
const list_container = document.getElementById("list_container");


// input_box.addEventListener("keypress", press_enter);

input_box.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // addTask()
        //Trigger button by click
        document.getElementById("addBtn").click();
      }
});

//I was tryna get the button to "click" when you hit the enter key :()
function Look(event) {
    if (event.keyCode === 13) {
    // event.preventDefault();
    // alert('Hello World!')
    //Trigger button by click
    document.getElementById("addBtn").click();
  }
};

function press_enter(event){
    if (event.key = "Enter") {
        alert("hi!");
        // list_container = document.getElementById("list_container");
        // if(input_box.value === ''){
        //     alert("You must write something!");
        // }
        // else {
        //     let li = document.createElement("li");
        //     li.innerHTML = input_box.value;
        //     list_container.appendChild(li);
        // }
        document.getElementById("add").click();
    }
}
// ---------------------TODO TASK------------------------

function addTask(){
    const input_box = document.getElementById("input_box");
    const list_container = document.getElementById("list_container");
    if(document.getElementById("input_box").value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        //Adding the text in the input field will be added in the li
        li.innerHTML = input_box.value;
        //the li will be displayed inside of the list container
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = "";
}

list_container.addEventListener("click", function(event){
    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if (event.target.tagName === "SPAN"){
        event.target.parent.Element.remove();
    }
}, false);
