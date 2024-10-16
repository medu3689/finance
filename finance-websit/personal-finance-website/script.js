// Toggle Menu Functionality
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  console.log("clicked"); // Toggle the 'active' class on nav links
});
