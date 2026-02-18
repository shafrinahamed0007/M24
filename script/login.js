document.getElementById("login-btn").addEventListener("click", function () {
  // 1. get the mobile number input
  // 2. get the pin
  // 3. match pin & mobile
  // 3.1. true::> homepage
  // 3.2. false::> return

  const inputNumber = document.getElementById("input-number");
  const number = inputNumber.value;

  const pinCode = document.getElementById("input-pin");
  const pin = pinCode.value;

  if (number == "01872437708" && pin == "1234") {
    alert("Login Success!");
  } else {
    alert("Login Failed");
    window.location.assign("/home.html");
  }
});
