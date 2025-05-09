
const sections = document.querySelectorAll('.card'); // Select all sections

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
  entry.target.classList.add('visible'); // Add 'visible' class when section is in view
} else {
  entry.target.classList.remove('visible'); // Remove when not in view
}
});
}, {
threshold: 0.1 // Trigger animation when 10% of the element is visible
});

// Observe all sections
sections.forEach((section) => {
observer.observe(section);
});
function handleSubmit(event) {
event.preventDefault();
document.getElementById("successMessage").style.display = "block";
}
