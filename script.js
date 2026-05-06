

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));




const cards = document.querySelectorAll(".plant-care-card");
const stickyTop = window.innerHeight * 0.12;

window.addEventListener("scroll", () => {
  cards.forEach((card, index) => {
    const nextCard = cards[index + 1];
    if (!nextCard) return;

    const nextTop = nextCard.getBoundingClientRect().top;

    let progress = (stickyTop - nextTop + 450) / 450;
    progress = Math.min(Math.max(progress, 0), 1);

    // scale
    const scale = 1 - progress * 0.08;

    // blur (small subtle effect)
    const blur = progress * 1; // max 4px blur

    card.style.transform = `scale(${scale})`;
    card.style.filter = `blur(${blur}px)`;
  });
});


const bb = document.querySelector(".cate-heading")

bb.addEventListener("click", ()=>{
  window.location.href ="images/hero-plant.png"
} )





