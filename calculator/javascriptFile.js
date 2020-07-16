var operatorClick = 0;
function printResult(value){
    if(value == ""){
        document.getElementById("resultValue").innerText = "";
    }else{
        document.getElementById("resultValue").innerText = getFormattedNumber(value);
    } 
}
function printHistory(value){
    if(value == ""){
        document.getElementById("historyValue").innerText = "";
    }else{
        document.getElementById("historyValue").innerText = value;
    }   
}
function clear(){
    totalNumberOfOperatorClicks = 0;
    printResult("");
    printHistory("");
}
function getFormattedNumber(value){
    var number = Number(value);
    return number.toLocaleString();
}
function getNonFormattedNumber(value){
    return value.replace(/,/g, "");
}
function backspaceNumber(value){
    if(/=/g.test(document.getElementById("historyValue").innerText)){
        printHistory("");
        printResult("");
    }else{
        return value = value.substring(0,value.length-1);
    }
}
function numberClicks(value){
    if(/=/g.test(document.getElementById("historyValue").innerText)){
        printHistory("");
        printResult("");
    }else{
        if(operatorClick == 0){
            printResult(getNonFormattedNumber(document.getElementById("resultValue").innerText)+value);   
        }else{
            operatorClick -= 1;
            printResult("");
            printResult(value);
        }
    }
}
function operatorClicks(value){
    operatorClick += 1;
    if(/=/g.test(document.getElementById("historyValue").innerText)){
        printHistory("");
        printResult("");
    }else{
        printHistory(document.getElementById("historyValue").innerText += document.getElementById("resultValue").innerText + value);
    }
}
function evaluate(){
    var result = eval(getNonFormattedNumber(document.getElementById("historyValue").innerText += document.getElementById("resultValue").innerText));
    printResult(result);
    printHistory(getNonFormattedNumber(document.getElementById("historyValue").innerText + "=" + result));
}
var operator = document.getElementsByClassName("operator");
for(var operatorNumber = 0 ; operatorNumber < operator.length ; operatorNumber++){
    operator[operatorNumber].addEventListener('click' , function(){
        switch(this.id){
            case "clear":
                clear();
                break;
            case "backspace":
                printResult(getNonFormattedNumber(backspaceNumber(document.getElementById("resultValue").innerText)));
                break;
            case "multiplication":
                operatorClicks("*");
                break;
            case "plus":
                operatorClicks("+");
                break;
            case "subtract":
                operatorClicks("-");
                break;        
            case "divide":
                operatorClicks("/");
                break;     
            case "equal":
                evaluate();
                break;       
            default:
                document.getElementById("resultValue").innerText = "Syntax Error!";
        }
    });
}
var numberArray = document.getElementsByClassName("number");
for(var number = 0 ; number < numberArray.length ; number++){
    numberArray[number].addEventListener('click',function(){
        numberClicks(this.id);
    });
}