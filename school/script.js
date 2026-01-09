const elements = document.querySelectorAll(".fade");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (pos < screenHeight - 100) {
      if (currentScroll > lastScroll) {
        // scrolling down
        el.style.animation = "slideUp 0.8s ease forwards";
      } else {
        // scrolling up
        el.style.animation = "slideDown 0.8s ease forwards";
      }
    }
  });

  lastScroll = currentScroll;
});
