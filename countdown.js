const COUNTDOWN_ELEMENT_ID = "countdown";
// 21.03.2025 18:00:00 CET
const COUNTDOWN_DATE = new Date("2025-03-21T18:00:00+01:00");

const countdownElement = document.getElementById(COUNTDOWN_ELEMENT_ID);

function updateElement() {
  const currentDate = new Date();
  const timeLeft = COUNTDOWN_DATE - currentDate;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateElement();
  setInterval(updateElement, 1000);
});
