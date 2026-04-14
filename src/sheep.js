// 小羊交互逻辑
function initSheep() {
    // 获取DOM元素
    const tracker = document.getElementById('sheep-tracker');
    const flipper = document.getElementById('sheep-flipper');
    const bouncer = document.getElementById('sheep-bouncer');

    if (!tracker || !flipper || !bouncer) {
        console.error("Sheep DOM elements not found!");
        return;
    }

    // 状态变量
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let sheepX = window.innerWidth / 2;
    let sheepY = window.innerHeight / 2;
    let isMoving = false;
    let facingRight = true;

    // 监听鼠标移动
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 监听触摸屏幕 (兼容移动端)
    window.addEventListener('touchmove', (e) => {
        if(e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    });

    // 主渲染循环
    function render() {
        // 1. 先判断朝向：基于小羊当前平滑位置与鼠标的相对距离，增加死区避免频繁闪烁
        if (mouseX > sheepX + 15 && !facingRight) {
            facingRight = true;
        } else if (mouseX < sheepX - 15 && facingRight) {
            facingRight = false;
        }

        // 2. 计算目标位置：让小羊目标点始终在光标的左侧或右侧
        const targetX = mouseX + (facingRight ? -40 : 40);
        const targetY = mouseY + 30;

        // 3. 计算当前小羊位置与目标位置的距离
        const dx = targetX - sheepX;
        const dy = targetY - sheepY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // 如果距离大于 2 像素，小羊开始移动追赶
        if (distance > 2) {
            if (!isMoving) {
                isMoving = true;
                bouncer.classList.remove('is-idle');
                bouncer.classList.add('is-moving');
            }
            
            // 缓动算法 (Lerp)，让移动更平滑自然
            // 追击速度系数，越小越慢
            sheepX += dx * 0.06;
            sheepY += dy * 0.06;
        } else {
            // 距离很近，停下来
            if (isMoving) {
                isMoving = false;
                bouncer.classList.remove('is-moving');
                bouncer.classList.add('is-idle');
            }
        }

        // 更新 DOM 样式
        // 直接应用平滑计算后的 sheepX/Y，不再产生位移突变
        tracker.style.transform = `translate(${sheepX}px, ${sheepY}px)`;

        // 设置小羊的翻转 (1为右，-1为左)
        flipper.style.transform = `scaleX(${facingRight ? 1 : -1})`;

        // 循环调用下一帧
        requestAnimationFrame(render);
    }

    // 启动动画
    render();
}

// 确保在 DOM 加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSheep);
} else {
    initSheep();
}