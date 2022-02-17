
// this function is for gettting input and its value
function getInput(id) {
    const inputValue = document.getElementById(id);
    const inputValueNum = inputValue.value;
    // inputValue.value = "";
    return parseInt(inputValueNum);
}

// this function is only for gettting field
function getVariable(id) {
    let field = document.getElementById(id);
    return field;
}

// function  for food rent cloths
function expense() {

    const food = getInput('food');
    const rent = getInput('rent');
    const clothes = getInput('clothes');
    const expenseTotal = food + clothes + rent;
    return expenseTotal;
}
function calculate() {
    // income
    const incomeInput = getInput('income');
    const icomeErrorText = getVariable('error-text');
    //balance
    const balanceLeftSpan = getVariable('balanceLeft');

    // expenses details 
    const expenseTotal = expense();
    const expenseTotalSpan = getVariable('expenseTotal');
    //logics 
    if (incomeInput >= expenseTotal) {
        balanceLeftSpan.innerText = incomeInput - expenseTotal;
        expenseTotalSpan.innerText = expenseTotal;
    } else if (expenseTotal > incomeInput) {
        alert('not Enough to spend')
    }
    else {
        getVariable('error-text').style.display = 'block'
    }

}

function savings() {
    const expenseTotal = expense();
    const remainingBalanceSpan = getVariable('remaining');
    const incomeInput = getInput('income');
    const savingsAmountSpan = getVariable('savings');
    const savingsAmount = incomeInput * (getInput('save') / 100);

    // setting and validatting remaining amount 
    if (getInput('save') > 0 && incomeInput > 0) {
        if (expenseTotal <= 0 || isNaN(expenseTotal) == true) {
            remainingBalanceSpan.innerText = incomeInput - savingsAmount;
            // setting and validating saving amount
            savingsAmountSpan.innerText = savingsAmount;
        } else {

            if (incomeInput - expenseTotal - savingsAmount > 0) {
                if (getInput('save') < 100) {
                    remainingBalanceSpan.innerText = incomeInput - expenseTotal - savingsAmount;
                }else{
                    alert('cant save more than 100%')
                }
                // setting and validating saving amount
                savingsAmountSpan.innerText = savingsAmount;
            } else {
                getVariable('savingsError').style.display = 'block'
            }
        }
    } else {
        alert('amount cant be less than 0')
    }


}