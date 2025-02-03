const output=document.getElementById("output");

function pindot(input){
output.value +=input;
}

function clearOutput(){
output.value = "";
}

function calc(){
output.value =eval(output.value);
}

function ano(){
    output.value="di ko alam para saan to";
}