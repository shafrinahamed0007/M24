document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1 -  get the agent number & validate
  // 2 - get the amount, validate, convert to number
  // 3 - get current balance, validate , conver to number
  // 4 - Calcualte new balance
  // 5 - Get the pin and verify
  // 5.1 - true: show an alert > set Balance
  // 5.2 - false: show an error alert > return

  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;

  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }

  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;

  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;

  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const cashoutPinInput = document.getElementById("cashout-pin");
  const pin = cashoutPinInput.value;

  if (pin == "1234") {
    alert("Cashout Successfull");
    const newBalance = Number(balance) - Number(cashoutAmount);
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }

  console.log("New Balance", newBalance);
});
