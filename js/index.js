// Navigation toggle functionality
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     });
// });

// Typing animation functionality
document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("typing-animation"); // Match the updated ID

    if (!target) {
        console.error("Typing animation element not found.");
        return;
    }

    const text = "Data Analyst, Programmer, Pokemon Maniac and AI enthusiast";
    let index = 0;

    // Set the text color from JavaScript
    target.style.color = "#76d7c4"; // Teal color or any desired color

    function typeEffect() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust the typing speed if needed
        }
    }

    typeEffect();
});


