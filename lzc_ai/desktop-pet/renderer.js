// ===== 渲染进程：事件绑定 + 交互 =====

const canvas = document.getElementById('pet-canvas');
// 恢复上次选择的皮肤
const savedSkin = localStorage.getItem('pet-skin') || 'orange';
const pet = new Pet(canvas, savedSkin);

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

// --- 键盘快捷键 ---
const SKIN_KEYS = { '1': 'orange', '2': 'black', '3': 'white', '4': 'gray' };
window.addEventListener('keydown', (e) => {
  const skinId = SKIN_KEYS[e.key];
  if (skinId) {
    pet.setSkin(skinId);
    localStorage.setItem('pet-skin', skinId);
  }
  if (e.key === 's' || e.key === 'S') {
    window.electronAPI.showContextMenu();
  }
});

// --- 接收主进程皮肤切换 ---
window.electronAPI.onSetSkin((skinId) => {
  pet.setSkin(skinId);
  localStorage.setItem('pet-skin', skinId);
});

// --- 空闲检测 → SLEEPY ---
let lastInteraction = Date.now();
['mousedown', 'mousemove', 'keydown'].forEach((evt) => {
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
