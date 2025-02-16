const input1 = document.getElementById('ip1');
const input2 = document.getElementById('ip2');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const resultSpan = document.getElementById('result');

function addNumbers() {
    const num1 = parseFloat(input1.value); 
    const num2 = parseFloat(input2.value); 

    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = "Invalid input"; 
    } else {
        const sum = num1 + num2; 
        resultSpan.textContent = sum; 
    }
}

function subtractNumbers() {
    const num1 = parseFloat(input1.value); 
    const num2 = parseFloat(input2.value); 

    if (isNaN(num1) || isNaN(num2)) {
        resultSpan.textContent = "Invalid input"; 
    } else {
        const difference = num1 - num2;
        resultSpan.textContent = difference; 
    }
}

addBtn.addEventListener('click', addNumbers);
subBtn.addEventListener('click', subtractNumbers);