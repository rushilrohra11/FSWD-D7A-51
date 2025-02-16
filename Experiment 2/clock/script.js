function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Add leading zeros
    const displayHours = String(formattedHours).padStart(2, '0');
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');

    // Update the DOM
    document.getElementById('hours').textContent = displayHours;
    document.getElementById('minutes').textContent = displayMinutes;
    document.getElementById('seconds').textContent = displaySeconds;
    document.getElementById('ampm').textContent = ampm;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();