// Slideshow
let index = 0;
function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
setInterval(showSlides, 3000);

// Floating Hearts
function createHearts() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHearts, 500);

// Proposal
function sayYes() {
  alert("Yayyy 🎉💖 You just made me the happiest person ever!");
  launchFireworks();
  createConfetti();
}

// Confetti
function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Fireworks
function launchFireworks() {
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement("div");
    firework.className = "confetti";
    firework.style.left = "50vw";
    firework.style.top = "50vh";
    firework.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    firework.style.width = "6px";
    firework.style.height = "6px";
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200 + 100;
    firework.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 2000);
  }
}