

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
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
