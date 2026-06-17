const data = document.getElementById("data");
const navLinks = document.getElementById("navLinks");

data.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  data.classList.toggle("active");
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// FORM VALIDATION
const form = document.getElementById("contactForm");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const msgEl = document.getElementById("message");

const nameErr = document.getElementById("nameError");
const emailErr = document.getElementById("emailError");
const msgErr = document.getElementById("messageError");
const success = document.getElementById("successMsg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", e => {
  e.preventDefault();

  let ok = true;

  if (!nameEl.value.trim()) {
    nameErr.textContent = "Required Info";
    ok = false;
  } else nameErr.textContent = "";

  if (!emailRegex.test(emailEl.value)) {
    emailErr.textContent = "Invalid email";
    ok = false;
  } else emailErr.textContent = "";

  if (msgEl.value.trim().length < 10) {
    msgErr.textContent = "Min 21 characters";
    ok = false;
  } else msgErr.textContent = "";

  if (ok) {
    success.classList.add("show");
    form.reset();
    setTimeout(() => success.classList.remove("show"), 4000);
  }
});