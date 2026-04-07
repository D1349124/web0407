document.querySelector(".login-btn").addEventListener("click", () => {
  const acc = document.getElementById("account").value;
  const pwd = document.getElementById("password").value;

  if (!acc || !pwd) {
    alert("請輸入帳號與密碼");
    return;
  }

  alert("登入成功（模擬）");
});

document.querySelector(".create-btn").addEventListener("click", () => {
  alert("導向註冊頁（未實作）");
});
