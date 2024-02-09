document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. I will get back to you soon!');
    // Reset the form
    this.reset();
});
