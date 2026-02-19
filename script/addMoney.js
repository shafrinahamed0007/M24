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

    // history
    // 1 - history-container ke dhore niye asbo
    // 2 - new div create korbo
    // 3 - new div innerHTML add korbo
    // 4 - history container e newDiv append korbo

    // 1
    const history = document.getElementById("history-container");

    // 2
    const newHistory = document.createElement("div");

    // 3
    newHistory.innerHTML = `
     <div class="transaction-card p-5 bg-base-100 mt-3">
     Add Money Success from ${bankAccount}, Acc-No: ${accNo} at ${new Date()}


    </div>
    `;

    // 4
    history.append(newHistory);
  } else {
    alert("Invalid PIN");
    return;
  }
});
