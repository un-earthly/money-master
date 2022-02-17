function calculate() {
    const icomeErrorText = getVariable('error-text');
    const expenseTotalSpan = getVariable('expenseTotal');
    const balanceLeft = getVariable('balanceLeft');
    const food = getInput('food');
    const rent = getInput('rent');
    const clothes = getInput('clothes');
    const incomeInput = getInput('income');
    const expenseTotal = food + clothes + rent;


    // validation and setting innertext 

    
    if (isNaN(incomeInput) == false && incomeInput > 0) {
        if (expenseTotal > incomeInput) {
            alert('not Enough to spend')
        } else if (expenseTotal >= 0) {
            expenseTotalSpan.innerText = expenseTotal;
            balanceLeft.innerText = incomeInput - expenseTotal;
        }
    } else {
        icomeErrorText.style.display = 'block';
    }

}


// this function is for gettting input and its value
function getInput(id) {
    const inputValue = document.getElementById(id);
    const inputValueNum = inputValue.value;
    inputValue.value = ""
    return parseInt(inputValueNum);
}

// this function is only for gettting field
function getVariable(id) {
    let field = document.getElementById(id);
    return field;
}

// this function is for savings button
function savings() {
    const incomeInput = getInput('income');
    const savingsAmount = incomeInput * (getInput('save') / 100);
    //validation
    if (savingsAmount <= incomeInput && savingsAmount > 0) {
        getVariable('savings').innerText = savingsAmount;
        getVariable('remaining').innerText = incomeInput - savingsAmount;
        getVariable('savingsError').style.display = 'none'
    } else {
        getVariable('savingsError').style.display = 'block'
    }
}