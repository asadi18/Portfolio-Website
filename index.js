// Toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
}

// Scroll section active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `header nav a[href*="${id}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });

  // Sticky Navbar
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 100);
  }

  // Remove toggle icon and navbar after scroll
  if (menuIcon && navbar) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

// Close navbar when clicking a nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuIcon && navbar) {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    }
  });
});

// Scroll Reveal
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal({
    distance: "80px",
    duration: 1800,
    delay: 180,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img, .education-container, .research-container, .cert-container, .portfolioContainer, .contactMe form",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .about-content", {
    origin: "right",
  });
}

// Typed JS
if (typeof Typed !== "undefined") {
  const typed = new Typed(".multiple-text", {
    strings: [
      "Computer Science Graduate",
      "AI & Machine Learning Enthusiast",
      "Deep Learning Researcher",
      "Full-Stack Web Developer",
      "Cybersecurity Research Applicant",
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,
    loop: true,
  });
}
