let result = document.querySelector("#result");
let history = [];

function display(val){
    result.value += val
    return val;
}
function calculate(){
    let equation = result.value;
    let answer = eval(equation);
    result.value = answer;
    return answer;
}
function clearEquation(){
    result.value = ""
}
function deleteOne(){
    result.value = result.value.toString().slice(0,-1);
}