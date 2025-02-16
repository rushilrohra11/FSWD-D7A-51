const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

toggleButton.addEventListener('click', function () {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.innerText = 'Hide Content';
    } else {
        content.style.display = 'none';
        toggleButton.innerText = 'Show Content';
    }
});