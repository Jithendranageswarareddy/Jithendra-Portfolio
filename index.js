// Skill bar animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-fill').forEach(el => {
    let width = el.dataset.width;
    setTimeout(()=>{ el.style.width = width; }, 500);
  });

  // Scroll reveal animation
  const faders = document.querySelectorAll('.fade-up');
  const appearOptions = { threshold:0.2 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
