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

document.addEventListener("click", (e) => {
  const navbar = document.querySelector(".navBar");
  const toggleBtn = document.querySelector(".hamburger-menu");
  if (!navbar.contains(e.target) && !toggleBtn.contains(e.target)) {
    navbar.classList.remove("mobile-active");
  }
});

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
