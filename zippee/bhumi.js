// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const pieces = [];
const colors = ["#ff6b6b","#6a11cb","#f7b733","#1dd1a1","#ff9ff3"];
for(let i=0;i<120;i++){
  pieces.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*8 + 4,
    speedY: Math.random()*3 + 2,
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

function drawConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const p of pieces){
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
    p.y += p.speedY;
    if(p.y>canvas.height) p.y=-p.size;
  }
  requestAnimationFrame(drawConfetti);
}
drawConfetti();

window.addEventListener("resize", ()=>{
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

// Button action
const wishBtn = document.getElementById("wishBtn");
const actionMsg = document.getElementById("actionMsg");
wishBtn.addEventListener("click", ()=>{
  actionMsg.textContent = "🎉 Happy Birthday, Bhumi! 🎉";
});
