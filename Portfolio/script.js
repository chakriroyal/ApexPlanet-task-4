// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
  this.reset();
});

// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
