const contactForm = document.querySelector('.contact-form');
const displayDetails = document.createElement('div'); 
displayDetails.className = 'display-details'; 
contactForm.parentElement.appendChild(displayDetails); 

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    const detailsHTML = `
        <h3>Submitted Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    displayDetails.innerHTML = detailsHTML;

    contactForm.reset();
});