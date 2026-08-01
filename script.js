// Pobierz ustawienia z pliku config.json w repozytorium
// Dzięki temu wszyscy odwiedzający widzą te same dane

fetch('config.json?v=' + Date.now())
  .then(response => {
    if (!response.ok) throw new Error('Nie udało się pobrać config.json');
    return response.json();
  })
  .then(settings => {
    document.getElementById('eventName').textContent = settings.eventName;
    document.getElementById('eventDateDisplay').textContent = settings.eventDateDisplay;
    startCountdown(settings.eventDate);
  })
  .catch(err => {
    console.error(err);
    document.getElementById('eventName').textContent = 'Błąd ładowania ustawień';
    document.getElementById('eventDateDisplay').textContent = 'Sprawdź plik config.json';
  });

function startCountdown(eventDateStr) {
  const EVENT_DATE = new Date(eventDateStr).getTime();

  function update() {
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

  update();
  setInterval(update, 1000);
}