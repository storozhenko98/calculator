const numKeys = document.getElementById("numberKeys");
const numKeysWidth = document.getElementById("numberKeys").offsetWidth;
const functionKeys = document.getElementById("functionKeys");
const functionKeysWidth = document.getElementById("functionKeys").offsetWidth;
let input = document.getElementById("input");
let result = document.getElementById("result");
let inputValueInt = document.getElementById("inputValue").innerHTML;
let inputLength = inputValueInt.length;

function createNumberKeys(){
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
            if (inputLength < 5) {document.getElementById("inputValue").innerHTML = document.getElementById("inputValue").innerHTML + integerKey.textContent;};
        });
        numKeys.appendChild(integerKey);
        numberIndex += 1;
    }
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
            if (inputLength < 5) {document.getElementById("inputValue").innerHTML = document.getElementById("inputValue").innerHTML + zeroKey.textContent;};
        });
        numKeys.appendChild(zeroKey);
        zeroIndex += "0";
    }
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

function createFunctionKeys() { 

    const add = document.createElement("button");
    add.style.width = 100+"%";
    add.textContent = "+";
    add.style.borderRadius = 5+"px";
    add.style.textAlign = "center";
    functionKeys.appendChild(add);

    const subtract = document.createElement("button");
    subtract.textContent = "-";
    subtract.style.width = 100+"%";
    subtract.style.borderRadius = 5+"px";
    subtract.style.textAlign = "center";
    functionKeys.appendChild(subtract);

    const divide = document.createElement("button");
    divide.textContent = "/";
    divide.style.width = 100+"%";
    divide.style.borderRadius = 5+"px";
    divide.style.textAlign = "center";
    functionKeys.appendChild(divide);

    const multiply = document.createElement("button");
    multiply.textContent = "X";
    multiply.style.width = 100+"%";
    multiply.style.borderRadius = 5+"px";
    multiply.style.textAlign = "center";
    functionKeys.appendChild(multiply);

    const del = document.createElement("button");
    del.textContent = "DEL";
    del.style.width = 100+"%";
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
    result.style.borderRadius = 5+"px";
    result.style.textAlign = "center";
    functionKeys.appendChild(result);

}






createNumberKeys();
createFunctionKeys();


