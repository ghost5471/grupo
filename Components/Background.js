// Cria o canvas
const canvas = document.createElement("canvas");
canvas.id = "bg";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Ajusta o tamanho
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

// Gera partículas aleatórias
const particles = [];
for (let i = 0; i < 800; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2 + 1,
    speedY: Math.random() * 0.5 + 0.2,
  });
}

// Animação de partículas
function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--particle-color");

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.y -= p.speedY;
    if (p.y < 0) p.y = height + Math.random() * 100;
  });

  requestAnimationFrame(draw);
}

draw();

// Recalcula tamanho da tela
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
