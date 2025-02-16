// Get references to the button and content
const toggleButton = document.getElementById('toggleButton');
const content = document.getElementById('content');

toggleButton.addEventListener('click', function () {
    // Toggle the visibility of the content
    if (content.style.display === 'none') {
        // If content is hidden, show it
        content.style.display = 'block';
        toggleButton.innerText = 'Hide Content';
    } else {
        // If content is visible, hide it
        content.style.display = 'none';
        toggleButton.innerText = 'Show Content';
    }
});