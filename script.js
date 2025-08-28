// Countdown Timer
const countdown = document.getElementById("countdown");
const eventDate = new Date("Aug 28, 2025 12:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "🚀 It's Party Time! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Reveal Price & Payment Button
function revealPrice(button, price) {
  const card = button.parentElement;
  const priceElement = card.querySelector(".price");
  const payBtn = card.querySelector(".pay-btn");

  priceElement.textContent = `₹${price}`;
  priceElement.classList.remove("hidden");
  payBtn.classList.remove("hidden");

  button.style.display = "none";
}

// Redirect to Google Form
function goToPayment() {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeczxlA-S_NQeZ8wRRNaJuphtgrFPA6X6MNK8n4PD-wkgxQDA/viewform?usp=header";
}

// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 5000);
});
