document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const sparkleButton = document.querySelector("[data-sparkle-button]");
if (sparkleButton) {
  sparkleButton.addEventListener("click", () => {
    const messages = [
      "♡ bunny-approved ♡",
      "✦ tiny internet magic ✦",
      "୨୧ pink pixels forever ୨୧",
      "☾ shrine sparkle activated ☾"
    ];
    sparkleButton.textContent = messages[Math.floor(Math.random() * messages.length)];
  });
}
