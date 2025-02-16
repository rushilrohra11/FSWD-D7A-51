// Get references to the form and the display area
const contactForm = document.querySelector('.contact-form');
const displayDetails = document.createElement('div'); // Create a div to display the details
displayDetails.className = 'display-details'; // Add a class for styling
contactForm.parentElement.appendChild(displayDetails); // Append the div after the form

// Add an event listener to the form
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Create HTML to display the details
    const detailsHTML = `
        <h3>Submitted Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Update the display area with the entered details
    displayDetails.innerHTML = detailsHTML;

    // Clear the form inputs
    contactForm.reset();
});