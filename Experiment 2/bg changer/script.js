const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5", "#F5FF33"];

let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];

    currentIndex = (currentIndex + 1) % colors.length;
}

// Change the background color every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundColor, 5000);

changeBackgroundColor();