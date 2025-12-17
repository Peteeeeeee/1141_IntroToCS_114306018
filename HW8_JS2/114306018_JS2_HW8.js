function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error (Div by 0)";
    }
    return a / b;
}

function calculate() {
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultDisplay = document.getElementById("result");

    
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.innerText = "Please enter valid numbers";
        return;
    }

    let result;

    
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid Operation";
    }

    // 3. 顯示結果 (如果是數字，則取小數點後兩位)
    if (typeof result === "number") {
        resultDisplay.innerText = "Result = " + result.toFixed(2);
    } else {
        // 如果是錯誤訊息 (例如除以零)，直接顯示
        resultDisplay.innerText = result;
    }
}