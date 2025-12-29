// Mobile nav toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav when link clicked (mobile)
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
  }
});

// Simple contact form handling
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = "Please fill in all fields.";
    statusEl.style.color = "#f97373";
    return;
  }

  statusEl.textContent = "Thanks, your message has been recorded locally (no backend wired).";
  statusEl.style.color = "#4ade80";
  form.reset();
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
