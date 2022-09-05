const numKeys = document.getElementById("numberKeys");
const numKeysWidth = document.getElementById("numberKeys").offsetWidth;
const functionKeys = document.getElementById("functionKeys");
const functionKeysWidth = document.getElementById("functionKeys").offsetWidth;
let input = document.getElementById("input");
let result = document.getElementById("result");
let inputValueInt = document.getElementById("inputValue").innerHTML;
let inputLength = inputValueInt.length;
let valueOne;
let addFunc = false;
let subtractionFunc = false;
let multiplicationFunc = false;
let divisionFunc = false;


//Function to Create Number Keys
function createNumberKeys(){
    //1-9 Keys
    let numberIndex = 1;
    for (let index = 0; index < 9; index++) {
        const integerKey = document.createElement("button");
        integerKey.textContent = numberIndex;
        integerKey.style.flex = 30+"%";
        integerKey.style.borderRadius = 5+"px";
        integerKey.style.textAlign = "center";
        integerKey.addEventListener("click", function(){
            let inputValueInt = document.getElementById("inputValue").innerHTML;
            let inputLength = inputValueInt.length;
            if (inputLength < 7) {document.getElementById("inputValue").innerHTML = document.getElementById("inputValue").innerHTML + integerKey.textContent;};
        });
        numKeys.appendChild(integerKey);
        numberIndex += 1;
    }
    //Zero Keys
    let zeroIndex = "0"; 
    for (let index = 0; index <2; index++) {
        const zeroKey = document.createElement("button");
        zeroKey.textContent = zeroIndex;
        zeroKey.style.flex = 30+"%";
        zeroKey.style.borderRadius = 5+"px";
        zeroKey.style.textAlign = "center";
        zeroKey.addEventListener("click", function(){
            let inputValueInt = document.getElementById("inputValue").innerHTML;
            let inputLength = inputValueInt.length;
            if (inputLength < 7) {document.getElementById("inputValue").innerHTML = document.getElementById("inputValue").innerHTML + zeroKey.textContent;};
        });
        numKeys.appendChild(zeroKey);
        zeroIndex += "0";
    }
    //Decimal Keys 
    const decimalKey = document.createElement("button");
    decimalKey.textContent = ".";
    decimalKey.style.flex = 30+"%";
    decimalKey.style.borderRadius = 5+"px";
    decimalKey.style.textAlign = "center";
    decimalKey.addEventListener("click", function(){
        let inputDecimal = document.getElementById("inputValue").innerHTML;
        let decimalTruth = inputDecimal.includes(".");
        if (decimalTruth === false) {document.getElementById("inputValue").innerHTML = document.getElementById("inputValue").innerHTML + decimalKey.textContent;};
    });
    numKeys.appendChild(decimalKey); 
}

//Creation of Function Keys

function createFunctionKeys() { 

    const add = document.createElement("button");
    add.style.width = 100+"%";
    add.style.height = 14 + "%";
    add.textContent = "+";
    add.style.borderRadius = 5+"px";
    add.style.textAlign = "center";
    add.addEventListener("click", ()=>{valueOne = numberRegistryOne(); addFunc = true});
    functionKeys.appendChild(add);
   

    const subtract = document.createElement("button");
    subtract.style.width = 100+"%";
    subtract.style.height = 14 + "%";
    subtract.textContent = "-";
    subtract.style.borderRadius = 5+"px";
    subtract.style.textAlign = "center";
    subtract.addEventListener("click", ()=>{valueOne = numberRegistryOne(); subtractionFunc = true});
    functionKeys.appendChild(subtract);

    const divide = document.createElement("button");
    divide.textContent = "/";
    divide.style.width = 100+"%";
    divide.style.height = 14 + "%";
    divide.style.borderRadius = 5+"px";
    divide.style.textAlign = "center";
    divide.addEventListener("click", ()=>{valueOne = numberRegistryOne(); divisionFunc = true});
    functionKeys.appendChild(divide);

    const multiply = document.createElement("button");
    multiply.textContent = "X";
    multiply.style.width = 100+"%";
    multiply.style.height = 14 + "%";
    multiply.style.borderRadius = 5+"px";
    multiply.style.textAlign = "center";
    multiply.addEventListener("click", ()=>{valueOne = numberRegistryOne(); multiplicationFunc = true});
    functionKeys.appendChild(multiply);

    const del = document.createElement("button");
    del.textContent = "DEL";
    del.style.width = 100+"%";
    del.style.height = 14 + "%";
    del.style.borderRadius = 5+"px";
    del.style.textAlign = "center";
    del.addEventListener("click", function(){
        let innerValue = document.getElementById("inputValue").innerHTML;
        innerValue = innerValue.slice(0, -1);
        document.getElementById("inputValue").innerHTML = innerValue;
    })
    functionKeys.appendChild(del);

    const clear = document.createElement("button");
    clear.textContent = "CL";
    clear.style.width = 100+"%";
    clear.style.height = 14 + "%";
    clear.style.borderRadius = 5+"px";
    clear.style.textAlign = "center";
    clear.addEventListener("click", function(){
        document.getElementById("resultValue").innerHTML = "";
        document.getElementById("inputValue").innerHTML = "";
    });
    functionKeys.appendChild(clear);

    const result = document.createElement("button");
    result.textContent = "=";
    result.style.width = 100+"%";
    result.style.height = 14 + "%";
    result.style.borderRadius = 5+"px";
    result.style.textAlign = "center";
    result.addEventListener("click", ()=>{calculation()});
    functionKeys.appendChild(result);

}


function test(){
    let inputTest = document.getElementById("inputValue").innerHTML;
    
}


function numberRegistryOne(){
    let valueOneString = document.getElementById("inputValue").innerHTML;
    let checker = valueOneString.includes(".");
    let valueOne;
    if (valueOneString == ""){valueOneString = document.getElementById("resultValue").innerHTML;};
    if (valueOneString == ""){alert("You've yet to enter a number");};
    if (checker == true){valueOne = parseFloat(valueOneString); console.log("floater")};
    if (checker == false){valueOne = parseInt(valueOneString); console.log("integer")};
    document.getElementById("inputValue").innerHTML = "";
    return valueOne;
}

function addition(){
    let valueTwoString = document.getElementById("inputValue").innerHTML;
    let checker = valueTwoString.includes(".");
    let valueTwo;
    if (valueTwoString == ""){alert("You've yet to enter a number to add");};
    if (checker == true){valueTwo = parseFloat(valueTwoString); console.log("floater")};
    if (checker == false){valueTwo = parseInt(valueTwoString); console.log("integer")};
    let addOut = valueOne + valueTwo;
    document.getElementById("inputValue").innerHTML="";
    return addOut;
}

function subtraction(){
    let valueTwoString = document.getElementById("inputValue").innerHTML;
    let checker = valueTwoString.includes(".");
    let valueTwo;
    if (valueTwoString == ""){alert("You've yet to enter a number to subtract");};
    if (checker == true){valueTwo = parseFloat(valueTwoString); console.log("floater")};
    if (checker == false){valueTwo = parseInt(valueTwoString); console.log("integer")};
    let addOut = valueOne - valueTwo;
    document.getElementById("inputValue").innerHTML="";
    return addOut;
}

function multiplication(){
    let valueTwoString = document.getElementById("inputValue").innerHTML;
    let checker = valueTwoString.includes(".");
    let valueTwo;
    if (valueTwoString == ""){alert("You've yet to enter a number to multiply");};
    if (checker == true){valueTwo = parseFloat(valueTwoString); console.log("floater")};
    if (checker == false){valueTwo = parseInt(valueTwoString); console.log("integer")};
    let addOut = valueOne * valueTwo;
    document.getElementById("inputValue").innerHTML="";
    return addOut;
}

function division(){
    let valueTwoString = document.getElementById("inputValue").innerHTML;
    let checker = valueTwoString.includes(".");
    let valueTwo;
    if (valueTwoString == ""){alert("You've yet to enter a number to divide");};
    if (checker == true){valueTwo = parseFloat(valueTwoString); console.log("floater")};
    if (checker == false){valueTwo = parseInt(valueTwoString); console.log("integer")};
    let addOut = valueOne / valueTwo;
    document.getElementById("inputValue").innerHTML="";
    return addOut;
}




function calculation(){
    if (addFunc == true){
        let outputValue = addition();
        outputValue = outputValue.toString();
        outputValue = outputValue.substring(0, 7);
        document.getElementById("resultValue").innerHTML = outputValue;
        addFunc = false;
    }
    if (subtractionFunc == true){
        let outputValue = subtraction();
        outputValue = outputValue.toString();
        outputValue = outputValue.substring(0, 7);
        document.getElementById("resultValue").innerHTML = outputValue;
        subtractionFunc = false;
    }
    if (multiplicationFunc == true){
        let outputValue = multiplication();
        outputValue = outputValue.toString();
        outputValue = outputValue.substring(0, 7);
        document.getElementById("resultValue").innerHTML = outputValue;
        multiplicationFunc = false;
    }
    if (divisionFunc == true){
        let outputValue = division();
        outputValue = outputValue.toString();
        outputValue = outputValue.substring(0, 7);
        document.getElementById("resultValue").innerHTML = outputValue;
        divisionFunc = false;
    }
}

createNumberKeys();
createFunctionKeys();

