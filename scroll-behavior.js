const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.scroll-animation, .gallery-left-right, .gallery-bottom-top, .gallery-right-left').forEach((element) => {
  observer.observe(element);
});
