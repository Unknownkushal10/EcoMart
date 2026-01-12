/* ============== EXTERNAL JS - Animation and Scroll Functions ============== */

// Function to add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Function to animate feature cards on scroll
function animateOnScroll() {
  const cards = document.querySelectorAll(".feature-card, .product-card");

  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.style.opacity = "1";
      card.style.animation = "fadeInUp 0.6s ease-out";
    }
  });
}

// Initialize cards with low opacity
window.addEventListener("load", function () {
  const cards = document.querySelectorAll(".feature-card, .product-card");
  cards.forEach((card) => {
    card.style.opacity = "0";
  });
});

// Add scroll event listener
window.addEventListener("scroll", animateOnScroll);
