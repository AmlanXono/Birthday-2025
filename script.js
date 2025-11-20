// Countdown to next birthday
    function updateCountdown() {
      const now = new Date();
      const birthDate = new Date(now.getFullYear(), 10, 21); // November 21
      if (now > birthDate) {
        birthDate.setFullYear(now.getFullYear() + 1);
      }
      const diff = birthDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById('countdown').innerText = `Next birthday in: ${days} days and ${hours} hours!`;
    }
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute

    // Gallery box functionality
    function showLarge(src) {
      document.getElementById('large-img').src = src;
      document.getElementById('large-view').style.display = 'flex';
    }
    function closeLarge() {
      document.getElementById('large-view').style.display = 'none';
    }

    // Surprise modal
    const modal = document.getElementById('surprise-modal');
    const btn = document.getElementById('surprise-btn');
    const close = document.getElementById('close-modal');
    btn.onclick = () => modal.style.display = 'flex';
    close.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
      if (event.target === modal) modal.style.display = 'none';
    };