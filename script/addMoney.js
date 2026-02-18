document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1 - bank account get
  const bankAccount = getVaueFromInput("add-money-bank");
  if (bankAccount == "Select A Bank") {
    alert("Please Select A Bank");
    return;
  }

  // 2 - get bank account number
  const accNo = getVaueFromInput("add-money-number");
  if (accNo.length != 11) {
    alert("Invalid Account Number");
    return;
  }

  //   3 - get amount
  const amount = getVaueFromInput("add-money-amount");

  const newBalance = getBalance() + Number(amount);

  const pin = getVaueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid PIN");
    return;
  }
});
