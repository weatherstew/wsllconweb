document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
  
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('from_name').value;
    const replyTo = document.getElementById('reply_to').value;
    const message = document.getElementById('message').value;
    console.log('Form submitted:', { name, replyTo, message });
    alert('Thank you for your message!');
    this.reset();
});