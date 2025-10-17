// 🟣 Load balances dynamically
document.addEventListener("DOMContentLoaded", () => {
  // 🟢 Fetch coins and rupees saved from Home Page
  let coins = localStorage.getItem("mainBalance") || 0;  // ← use the same key as in Home Page
  coins = parseInt(coins);

  let rupees = localStorage.getItem("totalRupeesDisplay");
  if (!rupees) {
    rupees = (coins / 100).toFixed(2); // fallback calculation
  } else {
    rupees = parseFloat(rupees).toFixed(2);
  }

  // 🟢 Display values
  document.getElementById("wallet-balance").textContent = coins;
  document.getElementById("winning-balance").textContent = `₹${rupees}`;

  // Method toggle
  const upiMethod = document.getElementById("upi");
  const bankMethod = document.getElementById("bank");
  const upiForm = document.getElementById("upi-form");
  const bankForm = document.getElementById("bank-form");

  upiMethod.addEventListener("click", () => {
    upiMethod.classList.add("active");
    bankMethod.classList.remove("active");
    upiForm.classList.remove("hidden");
    bankForm.classList.add("hidden");
  });

  bankMethod.addEventListener("click", () => {
    bankMethod.classList.add("active");
    upiMethod.classList.remove("active");
    bankForm.classList.remove("hidden");
    upiForm.classList.add("hidden");
  });

  // 🟣 UPI Withdraw
  upiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const upiAmount = parseFloat(document.getElementById("upiAmount").value);
    if (upiAmount < 5) {
      alert("Minimum withdraw amount is ₹5");
      return;
    }
    if (upiAmount > rupees) {
      alert("Insufficient balance");
      return;
    }
    alert(`₹${upiAmount} withdrawal via UPI initiated!`);
  });

  // 🟣 Bank Withdraw
  bankForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bankAmount = parseFloat(document.getElementById("bankAmount").value);
    if (bankAmount < 5) {
      alert("Minimum withdraw amount is ₹5");
      return;
    }
    if (bankAmount > rupees) {
      alert("Insufficient balance");
      return;
    }
    alert(`₹${bankAmount} withdrawal via Bank initiated!`);
  });
});
