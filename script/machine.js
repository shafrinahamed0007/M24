// machine id-> input value
function getVaueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// machine -> balance

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("current balance", Number(balance));
  return Number(balance);
}

// machine value -> set Balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// machine id > hide all > show id
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");

  //   hide all
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");

//   id wala element ta ke tumi show koro
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");

}
