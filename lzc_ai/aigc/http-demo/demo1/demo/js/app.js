// 计数器逻辑
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.getElementById("counter");
  const btnDecrease = document.getElementById("btn-decrease");
  const btnIncrease = document.getElementById("btn-increase");

  let count = 0;

  function updateDisplay() {
    counterEl.textContent = count;
  }

  btnDecrease.addEventListener("click", () => {
    count--;
    updateDisplay();
  });

  btnIncrease.addEventListener("click", () => {
    count++;
    updateDisplay();
  });
});
