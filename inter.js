document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Thank you! I’ll get back to you soon.";
  this.reset();
});
