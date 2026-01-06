let xp = 0;
let spirit = 0;
let level = 1;

function updateStats() {
  document.getElementById("xp").textContent = xp;
  document.getElementById("spirit").textContent = spirit;
  document.getElementById("level").textContent = level;
}

// 自動修練功能
setInterval(() => {
  spirit += 1; // 每秒增加靈氣值
  xp += Math.floor(Math.random() * 10); // 隨機經驗
  updateStats();
}, 1000);

// 靜坐按鈕
document.getElementById("meditate").addEventListener("click", () => {
  spirit += 10;
  xp += 20;
  updateStats();
});

// 打怪功能
document.getElementById("fight").addEventListener("click", () => {
  if (spirit > 10) {
    spirit -= 10; // 消耗靈氣
    xp += 50; // 增加經驗
    if (xp >= 100) {
      level += 1; // 升級
      xp = 0; // 重置 XP
    }
    alert("擊敗妖獸，獲得經驗！");
  } else {
    alert("靈氣不足！");
  }
  updateStats();
});