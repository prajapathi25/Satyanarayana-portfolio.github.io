// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Highlight nav link based on scroll position
  const sections = document.querySelectorAll("section[id]");
  const nav = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Basic contact form validation
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
});

