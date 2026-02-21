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
  const menuToggle = document.querySelector(".menu-toggle i");
  if (navBar.classList.contains("mobile-active")) {
    menuToggle.classList.remove("fa-bars");
    menuToggle.classList.add("fa-xmark");
  } else {
    menuToggle.classList.remove("fa-xmark");
    menuToggle.classList.add("fa-bars");
  }
}
const text = "Hello, I'm Ammar Mohamed.";
let index = 0;
function typeEffect() {
  // if screen width smaller than 900 px don't do this
  if (window.innerWidth < 950) {
    document.getElementById("name").innerHTML = text;
  } else {
    if (index < text.length) {
      document.getElementById("name").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        document.getElementById("name").innerHTML = "Hello,";
        index = 6;
        typeEffect();
      }, 2000);
    }
  }
}
typeEffect();
