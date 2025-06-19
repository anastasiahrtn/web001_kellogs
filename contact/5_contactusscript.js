document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('slide');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // required fields
        if (!firstName || !lastName || !email || !phone || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // last name has to only be be one word
        if (lastName.split(' ').length > 1) {
            alert('Last name should consist of only one word.');
            return;
        }

        // email format
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return;
        }

        // phone number has to be exactly 10 digits
        if (phone.length !== 10 || isNaN(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // message length
        if (message.length >= 250) {
            alert('Message should not exceed 250 characters.');
            return;
        }

        alert('Thank you for contacting us! We will get back to you shortly.');
        contactForm.reset();
    });
});
