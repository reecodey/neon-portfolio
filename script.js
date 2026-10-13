// Typing effect in terminal
const lines = [
  "> whoami",
  "reecodey",
  "",
  "> skills --list",
  "JavaScript · TypeScript · Python",
  "React · Node.js · Local LLMs",
  "",
  "> status",
  "Building cool shit...",
  "Ready for new projects 🚀"
];

const typedEl = document.getElementById("typed-text");
let lineIndex = 0;
let charIndex = 0;

function type() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      typedEl.textContent += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 28);
    } else {
      typedEl.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 180);
    }
  }
}

setTimeout(type, 600);

// Simple particles
const particlesContainer = document.getElementById("particles");
const particleCount = 40;

for (let i = 0; i < particleCount; i++) {
  const p = document.createElement("div");
  p.style.position = "absolute";
  p.style.width = Math.random() * 3 + 1 + "px";
  p.style.height = p.style.width;
  p.style.background = Math.random() > 0.5 ? "#a855f7" : "#06b6d4";
  p.style.borderRadius = "50%";
  p.style.opacity = Math.random() * 0.5 + 0.1;
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.animation = `float ${Math.random() * 10 + 8}s ease-in-out infinite`;
  p.style.animationDelay = Math.random() * 5 + "s";
  particlesContainer.appendChild(p);
}

// Add keyframes dynamically
const style = document.createElement("style");
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-30px) translateX(15px); }
  }
`;
document.head.appendChild(style);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});