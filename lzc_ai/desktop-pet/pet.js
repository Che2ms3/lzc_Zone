// ===== 宠物核心：状态机 + 像素绘制 + 动画 =====

const CANVAS_W = 200;
const CANVAS_H = 240;
const PIXEL = 5;       // 每个逻辑像素的实际尺寸
const GRID_W = 32;     // 逻辑网格宽度
const GRID_H = 38;

// ===== 皮肤配色方案 =====
const SKINS = {
  orange: {
    name: '橘猫',
    body: '#FF9800',
    dark: '#E65100',
    belly: '#FFF3E0',
    eye: '#4CAF50',
    pupil: '#1B5E20',
    nose: '#FF4081',
    earInner: '#FFCC80',
    mouth: '#BF360C',
  },
  black: {
    name: '黑猫',
    body: '#424242',
    dark: '#212121',
    belly: '#757575',
    eye: '#FFD54F',
    pupil: '#F57F17',
    nose: '#E57373',
    earInner: '#616161',
    mouth: '#212121',
  },
  white: {
    name: '白猫',
    body: '#ECEFF1',
    dark: '#B0BEC5',
    belly: '#FAFAFA',
    eye: '#42A5F5',
    pupil: '#0D47A1',
    nose: '#F48FB1',
    earInner: '#F5F5F5',
    mouth: '#90A4AE',
  },
  gray: {
    name: '灰猫',
    body: '#90A4AE',
    dark: '#546E7A',
    belly: '#CFD8DC',
    eye: '#66BB6A',
    pupil: '#1B5E20',
    nose: '#EF9A9A',
    earInner: '#B0BEC5',
    mouth: '#455A64',
  },
};

const DEFAULT_SKIN = 'orange';

// ===== 状态机 =====
const State = { IDLE: 'IDLE', WALKING: 'WALKING', HAPPY: 'HAPPY', EATING: 'EATING', SLEEPY: 'SLEEPY' };

class Pet {
  constructor(canvas, skinId = DEFAULT_SKIN) {
    this.ctx = canvas.getContext('2d');
    canvas.width = CANVAS_W;
    canvas.height = CANVAS_H;

    this.state = State.IDLE;
    this.frame = 0;
    this.tick = 0;
    this.x = 0;
    this.y = 0;
    this.dir = 1;           // 1=右, -1=左
    this.walkTimer = 0;
    this.idleTimer = 0;
    this.bubble = '';       // 气泡文字
    this.bubbleTimer = 0;
    this.hearts = [];       // 爱心粒子
    this.food = null;       // 食物粒子（鱼骨头）
    this.blinkTimer = 0;
    this.eyeClosed = false;
    this.skinId = skinId;
    this.colors = { ...SKINS[skinId] };
  }

  setSkin(skinId) {
    if (!SKINS[skinId]) return;
    this.skinId = skinId;
    this.colors = { ...SKINS[skinId] };
    this.showBubble(SKINS[skinId].name);
  }

  update() {
    this.tick++;

    // 眨眼逻辑
    if (this.state === State.IDLE || this.state === State.SLEEPY) {
      this.blinkTimer++;
      if (this.blinkTimer > 100 + Math.random() * 150) {
        this.eyeClosed = true;
        if (this.blinkTimer > 108) { this.eyeClosed = false; this.blinkTimer = 0; }
      }
    }

    // 空闲计时
    if (this.state === State.IDLE) {
      this.idleTimer++;
      if (this.idleTimer > 200) {
        this.setState(State.WALKING);
      }
    }

    // 走动逻辑
    if (this.state === State.WALKING) {
      this.walkTimer--;
      this.x += this.dir * 1.2;
      if (this.walkTimer <= 0) {
        this.dir = Math.random() > 0.5 ? 1 : -1;
        this.walkTimer = 60 + Math.random() * 120;
      }
      // 边界弹回
      if (this.x > 80) this.dir = -1;
      if (this.x < -80) this.dir = 1;
      // 随机切回 IDLE
      if (Math.random() < 0.005) {
        this.setState(State.IDLE);
      }
    }

    // HAPPY 持续 50 帧
    if (this.state === State.HAPPY) {
      if (this.tick % 10 === 0) {
        this.hearts.push({ x: 0, y: -10, life: 50, vy: -1.5 });
      }
      this.hearts.forEach(h => { h.y += h.vy; h.life--; });
      this.hearts = this.hearts.filter(h => h.life > 0);
      if (this.happyTimer && --this.happyTimer <= 0) this.setState(State.IDLE);
    }

    // EATING 持续 60 帧
    if (this.state === State.EATING) {
      if (this.eatTimer && --this.eatTimer <= 0) this.setState(State.IDLE);
    }

    // SLEEPY
    if (this.state === State.SLEEPY) {
      if (this.sleepTimer && --this.sleepTimer <= 0) this.setState(State.IDLE);
    }

    // 气泡计时
    if (this.bubbleTimer > 0) {
      this.bubbleTimer--;
      if (this.bubbleTimer <= 0) this.bubble = '';
    }

    this.frame++;
  }

  setState(state) {
    this.state = state;
    this.idleTimer = 0;
    if (state === State.HAPPY) this.happyTimer = 50;
    if (state === State.EATING) { this.eatTimer = 60; this.food = { y: -5, life: 60 }; }
    if (state === State.SLEEPY) this.sleepTimer = 150;
    if (state === State.WALKING) this.walkTimer = 60 + Math.random() * 120;
  }

  pet() {
    if (this.state === State.SLEEPY) { this.setState(State.IDLE); return; }
    this.setState(State.HAPPY);
    this.showBubble('喵~');
  }

  feed() {
    if (this.state === State.SLEEPY) { this.setState(State.IDLE); return; }
    this.setState(State.EATING);
    this.showBubble('好吃！');
  }

  sleep() {
    if (this.state === State.IDLE) { this.setState(State.SLEEPY); this.idleTimer = 0; }
  }

  showBubble(text) {
    this.bubble = text;
    this.bubbleTimer = 90;
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.save();
    // 移动到中心 + 偏移
    const cx = CANVAS_W / 2 + this.x;
    const cy = CANVAS_H / 2 + this.y;
    ctx.translate(cx, cy);

    // 面朝方向
    if (this.dir === -1) ctx.scale(-1, 1);

    this.drawCat(ctx);

    // 爱心粒子
    this.hearts.forEach(h => this.drawHeart(ctx, h.x, h.y));
    // 食物
    if (this.food) this.drawFood(ctx);

    ctx.restore();

    // 气泡（不受翻转影响）
    if (this.bubble) this.drawBubble(ctx, cx, cy);
  }

  // ===== 像素猫咪绘制 =====
  drawCat(ctx) {
    const p = PIXEL;
    // 身体偏移（让猫居中）
    const ox = -15 * p;
    const oy = -16 * p;

    const px = (x, y, c) => { ctx.fillStyle = c; ctx.fillRect(ox + x * p, oy + y * p, p, p); };

    // --- 耳朵 ---
    const ear = (ex, ey, flip) => {
      px(ex, ey + 4, this.colors.body);
      px(ex, ey + 3, this.colors.body);
      px(ex, ey + 2, this.colors.body);
      px(ex + flip, ey + 3, this.colors.body);
      px(ex, ey + 1, this.colors.body);
      px(ex + flip, ey + 2, this.colors.body);
      // 耳朵内部
      px(ex, ey + 3, this.colors.earInner);
      px(ex, ey + 2, this.colors.earInner);
    };
    ear(2, 2, 1);   // 左耳
    ear(13, 2, -1); // 右耳

    // --- 头部 ---
    // 额头
    px(5, 5, this.colors.body); px(6, 5, this.colors.body); px(7, 5, this.colors.body); px(8, 5, this.colors.body); px(9, 5, this.colors.body);
    px(4, 6, this.colors.body); px(5, 6, this.colors.body); px(6, 6, this.colors.dark); px(7, 6, this.colors.dark); px(8, 6, this.colors.body); px(9, 6, this.colors.body); px(10, 6, this.colors.body);
    px(3, 7, this.colors.body); px(4, 7, this.colors.body); px(5, 7, this.colors.body); px(6, 7, this.colors.body); px(7, 7, this.colors.body); px(8, 7, this.colors.body); px(9, 7, this.colors.body); px(10, 7, this.colors.body); px(11, 7, this.colors.body);
    px(3, 8, this.colors.body); px(4, 8, this.colors.body); px(5, 8, this.colors.body); px(6, 8, this.colors.body); px(7, 8, this.colors.body); px(8, 8, this.colors.body); px(9, 8, this.colors.body); px(10, 8, this.colors.body); px(11, 8, this.colors.body);

    // --- 眼睛 ---
    if (this.state === State.SLEEPY) {
      // 闭眼线
      px(5, 7, this.colors.eye); px(6, 7, this.colors.eye);
      px(9, 7, this.colors.eye); px(10, 7, this.colors.eye);
    } else if (this.eyeClosed) {
      px(5, 7, this.colors.eye); px(6, 7, this.colors.eye);
      px(9, 7, this.colors.eye); px(10, 7, this.colors.eye);
    } else if (this.state === State.HAPPY) {
      // 开心弯眼
      px(5, 7, this.colors.eye); px(6, 7, this.colors.eye);
      px(9, 7, this.colors.eye); px(10, 7, this.colors.eye);
      px(5, 8, this.colors.pupil);
      px(9, 8, this.colors.pupil);
    } else {
      px(5, 7, this.colors.eye); px(6, 7, this.colors.eye);
      px(9, 7, this.colors.eye); px(10, 7, this.colors.eye);
      px(5, 8, this.colors.pupil);
      px(9, 8, this.colors.pupil);
    }

    // --- 鼻子 ---
    px(7, 9, this.colors.nose); px(8, 9, this.colors.nose);

    // --- 嘴巴 ---
    px(6, 10, this.colors.mouth); px(9, 10, this.colors.mouth);
    px(7, 10, this.colors.body); px(8, 10, this.colors.body);

    // 身体
    px(5, 11, this.colors.body); px(6, 11, this.colors.body); px(7, 11, this.colors.body); px(8, 11, this.colors.body); px(9, 11, this.colors.body); px(10, 11, this.colors.body);
    px(4, 12, this.colors.body); px(5, 12, this.colors.belly); px(6, 12, this.colors.belly); px(7, 12, this.colors.belly); px(8, 12, this.colors.belly); px(9, 12, this.colors.belly); px(10, 12, this.colors.belly); px(11, 12, this.colors.body);
    px(4, 13, this.colors.body); px(5, 13, this.colors.belly); px(6, 13, this.colors.belly); px(7, 13, this.colors.belly); px(8, 13, this.colors.belly); px(9, 13, this.colors.belly); px(10, 13, this.colors.belly); px(11, 13, this.colors.body);
    px(4, 14, this.colors.body); px(5, 14, this.colors.belly); px(6, 14, this.colors.belly); px(7, 14, this.colors.belly); px(8, 14, this.colors.belly); px(9, 14, this.colors.belly); px(10, 14, this.colors.belly); px(11, 14, this.colors.body);
    px(5, 15, this.colors.body); px(6, 15, this.colors.body); px(7, 15, this.colors.body); px(8, 15, this.colors.body); px(9, 15, this.colors.body); px(10, 15, this.colors.body);

    // --- 腿（根据状态变化）---
    if (this.state === State.WALKING) {
      const step = Math.sin(this.frame * 0.3);
      // 前腿走路
      px(5, 16, this.colors.body); px(5, 17, this.colors.body);
      px(6, 16 + (step > 0 ? 0 : 1), this.colors.body); px(6, 17 + (step > 0 ? 0 : 1), this.colors.body);
      px(9, 16 + (step > 0 ? 0 : 1), this.colors.body); px(9, 17 + (step > 0 ? 0 : 1), this.colors.body);
      px(10, 16, this.colors.body); px(10, 17, this.colors.body);
    } else if (this.state === State.EATING) {
      // 蹲坐
      px(5, 16, this.colors.body); px(5, 17, this.colors.body);
      px(6, 16, this.colors.body);
      px(9, 16, this.colors.body);
      px(10, 16, this.colors.body); px(10, 17, this.colors.body);
      // 前爪前伸
      px(3, 14, this.colors.body); px(3, 15, this.colors.body);
      px(12, 14, this.colors.body); px(12, 15, this.colors.body);
    } else if (this.state === State.HAPPY) {
      // 跳起 - 腿缩起来
      px(4, 16, this.colors.body);
      px(11, 16, this.colors.body);
    } else if (this.state === State.SLEEPY) {
      // 趴下
      px(1, 15, this.colors.body); px(2, 15, this.colors.body); px(3, 15, this.colors.body);
      px(4, 16, this.colors.body); px(5, 16, this.colors.body); px(6, 16, this.colors.body);
      px(7, 16, this.colors.body); px(8, 16, this.colors.body); px(9, 16, this.colors.body);
      px(10, 16, this.colors.body); px(11, 16, this.colors.body);
    } else {
      // IDLE 站立
      px(4, 16, this.colors.body); px(4, 17, this.colors.body);
      px(5, 16, this.colors.body); px(5, 17, this.colors.body);
      px(6, 16, this.colors.body); px(6, 17, this.colors.body);
      px(9, 16, this.colors.body); px(9, 17, this.colors.body);
      px(10, 16, this.colors.body); px(10, 17, this.colors.body);
      px(11, 16, this.colors.body); px(11, 17, this.colors.body);
    }

    // --- 尾巴 ---
    if (this.state === State.HAPPY) {
      px(14, 12, this.colors.body); px(14, 11, this.colors.body); px(14, 10, this.colors.body); px(13, 10, this.colors.body);
    } else if (this.state === State.WALKING) {
      const sway = Math.sin(this.frame * 0.4) * 2;
      px(14, 12, this.colors.body); px(14 + sway, 11, this.colors.body); px(14 + sway * 2, 10, this.colors.body);
    } else {
      px(14, 12, this.colors.body); px(14, 11, this.colors.body); px(13, 10, this.colors.body);
    }

    // --- 呼吸起伏 (IDLE/SLEEPY) ---
    if ((this.state === State.IDLE || this.state === State.SLEEPY) && !this.eyeClosed) {
      const breathe = Math.sin(this.frame * 0.05) * 1;
      ctx.translate(0, breathe);
    }

    // --- 开心跳动 ---
    if (this.state === State.HAPPY) {
      const jump = Math.abs(Math.sin(this.frame * 0.3)) * -8;
      ctx.translate(0, jump);
    }

    // 睡眠 zZZ
    if (this.state === State.SLEEPY) {
      this.drawZ(ctx, 18, 3, Math.sin(this.frame * 0.1) * 2);
      this.drawZ(ctx, 22, 1, Math.sin(this.frame * 0.1 + 1) * 2);
    }
  }

  drawZ(ctx, x, y, offset) {
    const p = PIXEL;
    ctx.fillStyle = '#90CAF9';
    ctx.font = `${p * 3}px monospace`;
    ctx.fillText('z', -15 * p + x * p, -16 * p + y * p + offset);
  }

  drawHeart(ctx, x, y) {
    const s = 3;
    ctx.fillStyle = '#FF4081';
    ctx.beginPath();
    const hx = x - 15 * PIXEL;
    const hy = y - 16 * PIXEL;
    ctx.arc(hx - s, hy, s, 0, Math.PI);
    ctx.arc(hx + s, hy, s, 0, Math.PI);
    ctx.fillRect(hx - s * 2, hy, s * 4, s * 2);
    ctx.fill();
  }

  drawFood(ctx) {
    // 小鱼骨头 emoji 样式 - 简化鱼骨
    const px = (x, y, c) => { ctx.fillStyle = c; ctx.fillRect(x, y, PIXEL, PIXEL); };
    const ox = -15 * PIXEL + 18 * PIXEL;
    const oy = -16 * PIXEL + 6 * PIXEL;
    ctx.fillStyle = '#FFF';
    ctx.font = `${PIXEL * 3}px monospace`;
    ctx.fillText('🐟', ox, oy);
  }

  // ===== 气泡对话 =====
  drawBubble(ctx, cx, cy) {
    const bubbleY = cy - 70;
    const textW = this.bubble.length * 10;
    const bw = textW + 16;
    const bh = 26;
    const bx = cx - bw / 2;

    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(bx, bubbleY, bw, bh, 8);
    ctx.fill();
    ctx.stroke();

    // 三角
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath();
    ctx.moveTo(cx - 4, bubbleY + bh);
    ctx.lineTo(cx, bubbleY + bh + 6);
    ctx.lineTo(cx + 4, bubbleY + bh);
    ctx.fill();

    ctx.fillStyle = '#333';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(this.bubble, cx, bubbleY + 18);
    ctx.textAlign = 'start';
  }
}

// roundRect polyfill
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.quadraticCurveTo(x + w, y, x + w, y + r);
    this.lineTo(x + w, y + h - r);
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.lineTo(x + r, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - r);
    this.lineTo(x, y + r);
    this.quadraticCurveTo(x, y, x + r, y);
  };
}
