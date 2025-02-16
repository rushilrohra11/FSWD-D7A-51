const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', function () {
    if (bulb.src.endsWith('on.png')) {
        bulb.src = 'off.jpg';
    } else {
        bulb.src = 'on.png';
    }
});