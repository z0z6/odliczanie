// ============================================
// USTAW TUTAJ SWOJĄ DATĘ WYDARZENIA
// ============================================
const EVENT_DATE = new Date('2026-09-12T18:00:00').getTime();
// Format: ROK-MIESIĄC-DZIEN'T'GODZINA:MINUTY:SEKUNDY
// Przykłady:
// new Date('2026-12-31T23:59:59')  // Sylwester 2026
// new Date('2026-06-15T10:00:00')  // 15 czerwca 2026, 10:00
// ============================================

function updateCountdown() {
    const now = new Date().getTime();
    const distance = EVENT_DATE - now;

    if (distance < 0) {
        document.querySelector('.countdown').innerHTML = 
            '<div class="time-box"><span>WYDARZENIE ROZPOCZĘTE!</span></div>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);