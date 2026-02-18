document.getElementById("login-btn").addEventListener("click", function () {
  // 1. get the mobile number input
  // 2. get the pin
  // 3. match pin & mobile
  // 3.1. true::> homepage
  // 3.2. false::> return

  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;

  const pinInput = document.getElementById("input-pin");
  const pin = pinInput.value;

  if (contactNumber == "01872437708" && pin == "1234") {
    alert("login success");
  }else{
    alert("login failed");
    // window.location.replace("/home.html")
    window.location.assign("/home.html");
  }
});
