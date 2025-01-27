
// Smooth scrolling with offset adjustment
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 200; // Adjust based on your header's height
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function updateActiveSection() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const top = section.offsetTop - 100; // Adjust offset for better visibility
            const height = section.offsetHeight;
            
            if (scrollPosition >= top && scrollPosition < top + height) {
                sections.forEach(sec => sec.classList.remove("active"));
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveSection);

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset for better preview
                behavior: "smooth"
            });
        });
    });

    updateActiveSection(); // Set initial state
});


// AOS animation initialization
AOS.init();

// Toggle menu for smaller screens
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the theme toggle button and current theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme); // Apply saved theme
  updateButtonIcon(savedTheme); // Update button icon
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', () => {
  const isDarkTheme = body.classList.contains('dark-theme');
  const newTheme = isDarkTheme ? 'light-theme' : 'dark-theme';

  // Update the body class
  body.classList.remove(isDarkTheme ? 'dark-theme' : 'light-theme');
  body.classList.add(newTheme);

  // Save the new theme to localStorage
  localStorage.setItem('theme', newTheme);

  // Update the button icon
  updateButtonIcon(newTheme);
});

// Function to update the button icon
function updateButtonIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark-theme') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

