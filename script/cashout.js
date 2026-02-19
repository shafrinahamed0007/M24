// 1 -  get the agent number & validate
// 2 - get the amount, validate, convert to number
// 3 - get current balance, validate , conver to number
// 4 - Calcualte new balance
// 5 - Get the pin and verify
// 5.1 - true: show an alert > set Balance
// 5.2 - false: show an error alert > return

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   const numberInput = document.getElementById("cashout-number");
//   const agentNumber = numberInput.value;

//   if (agentNumber.length != 11) {
//     alert("Agent Number Invalid!!!");
//     return;
//   }

//   const amount = document.getElementById("cashout-amount");
//   const cashoutAmount = amount.value;

//   const balanceElement = document.getElementById("balance");
//   const balanceAmount = balanceElement.innerText;

//   const newBalance = Number(balanceAmount) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Cashout!!!");
//     return;
//   }

//   const cashoutPIN = document.getElementById("cashout-pin");
//   const pin = cashoutPIN.value;

//   if (pin == "1234") {
//     alert("Successfull Cashout!!!");
//     const newBalance = Number(balanceAmount) - Number(cashoutAmount);
//     balanceElement.innerText = newBalance;
//   } else {
//     alert("Invalid PIN");
//     return;
//   }
// });

document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getVaueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }

  const cashoutAmount = getVaueFromInput("cashout-amount");

  //   const balanceElement = document.getElementById("balance");
  //   const balance = balanceElement.innerText;

  const currentBalance = getBalance();

  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getVaueFromInput("cashout-pin");
  if (pin == "1234") {
    alert("Cashout Successfull");
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
     Cashout ${cashoutAmount}TK Success to ${cashoutNumber} , at ${new Date()}


    </div>
    `;

    // 4
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
