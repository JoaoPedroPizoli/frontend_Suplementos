function startCountdown(targetDate) {
    const countdownElement = document.getElementById("countdown");
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      if (distance < 0) {
        clearInterval(interval);
        countdownElement.textContent = "O E-commerce já está no ar!";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }
  
  window.onload = function () {
    // Define a data e hora do evento: 08/10 às 12:00
    const targetDate = new Date("2024-10-08T12:00:00"); // Ajuste o ano se necessário
    startCountdown(targetDate);
  };
  