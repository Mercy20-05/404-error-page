document.addEventListener("DOMContentLoaded", () => {
  // 1. History Back Navigation
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    });
  }

  // 2. Automated Countdown & Redirect
  const timerElement = document.getElementById("timer");
  let countdownSeconds = 15;

  const countdownInterval = setInterval(() => {
    countdownSeconds -= 1;
    if (timerElement) {
      timerElement.textContent = countdownSeconds;
    }

    if (countdownSeconds <= 0) {
      clearInterval(countdownInterval);
      window.location.href = "/";
    }
  }, 1000);

  // 3. Optional interactive 3D Tilt effect on desktop
  const card = document.getElementById("errorCard");
  if (window.matchMedia("(hover: hover)").matches && card) {
    window.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = (e.clientX / innerWidth - 0.5) * 12;
      const yOffset = (e.clientY / innerHeight - 0.5) * -12;
      card.style.transform = `perspective(1000px) rotateX(${yOffset}deg) rotateY(${xOffset}deg)`;
    });

    window.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }
});