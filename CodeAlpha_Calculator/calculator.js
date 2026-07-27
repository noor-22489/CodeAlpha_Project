
let current_display = "";

const display = document.getElementById("display_input");

function updateDisplay(){
    display.value = current_display;
}

function appendValue(value){
    current_display += value;
    updateDisplay();
}

function clearDisplay(){
    current_display = "";
    updateDisplay();
}

function deleteLast(){
    current_display = current_display.slice(0,-1);
    updateDisplay();
}

function calculate(){
    try{
        current_display = eval(current_display).toString();
    }
    catch{
        current_display = "Error";
    }
    updateDisplay();
}

document.addEventListener("keydown",function(event){

    const key = event.key;

    if("0123456789+-*/.".includes(key)){
        appendValue(key);
    }

    else if(key==="Enter"){
        event.preventDefault();
        calculate();
    }

    else if(key==="Backspace"){
        deleteLast();
    }

    else if(key==="Escape"){
        clearDisplay();
    }

});
