function calculate() {
    const icomeErrorText = getVariable('error-text');
    const expenseTotalSpan = getVariable('expenseTotal');
    const balanceLeft = getVariable('balanceLeft');
    const food = getInput('food');
    const rent = getInput('rent');
    const clothes = getInput('clothes');
    const incomeInput = getInput('income');
    const expenseTotal = food + clothes + rent;

    if (isNaN(incomeInput) == false && incomeInput > 0) {
        expenseTotalSpan.innerText = expenseTotal;
        if (expenseTotal > incomeInput) {
            alert('not Enough to spend')
        } else {
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

// this function is for saving button
function savings() {
    const balanceLeft = parseInt(getVariable('balanceLeft').innerText)
    const savingsAmount = balanceLeft * (getInput('save') / 100);
    getVariable('savings').innerText = savingsAmount;
    //validation
    if (savingsAmount <= balanceLeft) {
        getVariable('remaining').innerText = balanceLeft - savingsAmount;
        getVariable('savingsError').style.display = 'none'
    } else {
        getVariable('savingsError').style.display = 'block'
    }
}