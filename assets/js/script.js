document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('from_name').value;
        const replyTo = document.getElementById('reply_to').value;
        const message = document.getElementById('message').value;
        console.log('Form submitted:', { name, replyTo, message });
        alert('Thank you for your message!');
        this.reset();
    });
}
