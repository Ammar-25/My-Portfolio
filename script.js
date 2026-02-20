const observerOptions = {
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

function toggle() {
  const navBar = document.querySelector(".navBar");
  navBar.classList.toggle("mobile-active");
}
