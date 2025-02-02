// Simulate visitor count (just an example)
let visitorCount = 0;
document.getElementById('visitor-count').innerText = Total `Visitors: ${visitorCount}`;

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message Sent!');
    this.reset();
});