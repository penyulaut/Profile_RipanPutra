// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
// Ketika humberger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// SKILL JS
document.addEventListener("DOMContentLoaded", function() {
  const skillBars = document.querySelectorAll(".skill-level");

  function handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const level = parseFloat(skillBar.style.getPropertyValue('--level'));
        skillBar.style.width = (level * 100) + '%';
        skillBar.classList.add('increase');
      } else {
        const skillBar = entry.target;
        skillBar.style.width = '0'; // Reset width
        skillBar.classList.remove('increase'); // Remove the class to allow re-triggering the animation
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1 // Memulai animasi ketika 10% dari elemen terlihat
  });

  skillBars.forEach(skillBar => {
    observer.observe(skillBar);
  });
});
