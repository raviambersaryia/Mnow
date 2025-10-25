// Dynamic clock
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Floating star effect
const starContainer = document.getElementById("stars");
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.position = "absolute";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "white";
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animation = `twinkle ${Math.random() * 5 + 5}s infinite ease-in-out`;
  starContainer.appendChild(star);
}

// Add twinkle animation dynamically
const style = document.createElement('style');
style.innerHTML = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.2; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;
document.head.appendChild(style);

// Background slideshow: pick 2-3 random Aman photos and crossfade them
const photoSources = [
  'aman_0.jpg',
  'aman_1.jpg',
  'aman_2.jpg',
  'aman_3.jpg',
  'aman_.jpg'
];

function pickRandomSubset(arr, minCount = 2, maxCount = 3) {
  const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
  const copy = arr.slice();
  const result = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

function startBgSlideshow() {
  const container = document.getElementById('bgSlideshow');
  if (!container) return;

  // Clear existing
  container.innerHTML = '';

  // choose 2-3 photos
  const slides = pickRandomSubset(photoSources, 2, 3);

  slides.forEach((src, i) => {
    const img = document.createElement('img');
    img.className = 'bg-slide';
    img.src = src;
    img.alt = 'background';
    img.style.zIndex = i; // layering
    container.appendChild(img);
  });

  const nodes = Array.from(container.querySelectorAll('.bg-slide'));
  let current = 0;
  if (nodes.length === 0) return;
  nodes[current].classList.add('visible');

  // crossfade interval
  const intervalMs = 6000;
  let slideTimer = setInterval(() => {
    nodes[current].classList.remove('visible');
    current = (current + 1) % nodes.length;
    nodes[current].classList.add('visible');
  }, intervalMs);

  // every 20-30s pick a fresh subset (so slideshow sometimes runs a new set of 2-3 backgrounds)
  const refreshInterval = Math.floor(20000 + Math.random() * 10000);
  setTimeout(() => {
    clearInterval(slideTimer);
    startBgSlideshow();
  }, refreshInterval);
}

// start after DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // If bgSlideshow not present yet (older file names), create it
  if (!document.getElementById('bgSlideshow')) {
    const s = document.createElement('div');
    s.id = 'bgSlideshow';
    s.className = 'bg-slideshow';
    document.body.insertBefore(s, document.body.firstChild);
  }
  startBgSlideshow();
});
