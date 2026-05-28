// ===== 渲染进程：事件绑定 + 交互 =====

const canvas = document.getElementById('pet-canvas');
const pet = new Pet(canvas);

// --- 拖拽 vs 点击 ---
let mouseDown = false;
let startX = 0, startY = 0;
let moved = false;
const DRAG_THRESHOLD = 3;

canvas.addEventListener('mousedown', (e) => {
  mouseDown = true;
  moved = false;
  startX = e.screenX;
  startY = e.screenY;
});

window.addEventListener('mousemove', (e) => {
  if (!mouseDown) return;
  const dx = e.screenX - startX;
  const dy = e.screenY - startY;
  if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
    moved = true;
    window.electronAPI.moveWindow(dx, dy);
    startX = e.screenX;
    startY = e.screenY;
  }
});

window.addEventListener('mouseup', () => {
  if (mouseDown && !moved) {
    pet.pet();
  }
  mouseDown = false;
});

// 右键 → 喂食
canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  pet.feed();
});

// --- 空闲检测 → SLEEPY ---
let lastInteraction = Date.now();
['mousedown', 'mousemove'].forEach((evt) => {
  window.addEventListener(evt, () => { lastInteraction = Date.now(); });
});

// --- 动画循环 ---
function loop() {
  // 30 秒无操作进入 SLEEPY
  if (pet.state === State.IDLE && Date.now() - lastInteraction > 30000) {
    pet.sleep();
  }
  pet.update();
  pet.draw();
  requestAnimationFrame(loop);
}

loop();
