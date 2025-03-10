
const scrollable = document.getElementById('member_menu_scrollable');
const leftArrow = document.getElementById('member_menu_leftArrow');
const rightArrow = document.getElementById('member_menu_rightArrow');
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false; // 新增标志，判断是否正在拖动

function updateArrowVisibility() {
    const scrollWidth = scrollable.scrollWidth;
    const clientWidth = scrollable.clientWidth;
    const scrollLeftValue = scrollable.scrollLeft;

    // 显示箭头
    leftArrow.style.display = scrollLeftValue > 0 ? 'block' : 'none';
    rightArrow.style.display = scrollLeftValue < scrollWidth - clientWidth ? 'block' : 'none';

    // 更新箭头的可点击状态
    leftArrow.classList.toggle('disabled', scrollLeftValue === 0);
    rightArrow.classList.toggle('disabled', scrollLeftValue >= scrollWidth - clientWidth);
}

// 初始化箭头状态
updateArrowVisibility();

// 鼠标事件
scrollable.addEventListener('mousedown', (e) => {
    isDown = true;
    isDragging = false; // 重置拖动标志
    scrollable.style.cursor = 'grabbing'; // 更改鼠标样式
    startX = e.pageX - scrollable.offsetLeft; // 获取鼠标点击位置
    scrollLeft = scrollable.scrollLeft; // 获取当前滚动位置
    e.preventDefault(); // 阻止默认的拖动行为
});

scrollable.addEventListener('mouseleave', () => {
    isDown = false;
    scrollable.style.cursor = 'grab'; // 恢复鼠标样式
});

scrollable.addEventListener('mouseup', (e) => {
    isDown = false;
    scrollable.style.cursor = 'grab'; // 恢复鼠标样式
    // 只有在没有拖动的情况下才允许点击
    if (!isDragging) {
        const target = e.target.closest('.nav-link');
        if (target) {
            // 触发菜单项的点击事件
            target.click();
        }
    }
});

// 持续拖动
scrollable.addEventListener('mousemove', (e) => {
    if (!isDown) return; // 如果没有按下鼠标，则返回
    e.preventDefault(); // 防止默认行为
    const x = e.pageX - scrollable.offsetLeft; // 获取当前鼠标位置
    if(Math.abs(x - startX) > 5){
        isDragging = true; // 设置拖动标志
    }
    const walk = (x - startX) * 2; // 计算拖动的距离
    scrollable.scrollLeft = scrollLeft - walk; // 更新滚动位置
    updateArrowVisibility(); // 更新箭头状态
});

// 点击菜单项的事件
const menuItems = document.querySelectorAll('.nav-link');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (isDragging) { // 如果正在拖动，阻止点击事件
            console.log("preventDefault - click")
            e.preventDefault(); // 阻止超链接的默认行为
        }
    });
});

// 左箭头点击事件
leftArrow.addEventListener('click', () => {
    if (!leftArrow.classList.contains('disabled')) {
        scrollable.scrollTo({
            left: scrollable.scrollLeft - 100, // 向左滚动
            behavior: 'smooth' // 平滑滚动
        });
        // 在滚动后更新箭头状态
        setTimeout(updateArrowVisibility, 300); // 300ms 是估计的滚动时间
    }
});

// 右箭头点击事件
rightArrow.addEventListener('click', () => {
    if (!rightArrow.classList.contains('disabled')) {
        scrollable.scrollTo({
            left: scrollable.scrollLeft + 100, // 向右滚动
            behavior: 'smooth' // 平滑滚动
        });
        // 在滚动后更新箭头状态
        setTimeout(updateArrowVisibility, 300); // 300ms 是估计的滚动时间
    }
});

// 触摸事件
scrollable.addEventListener('touchstart', (e) => {
    isDown = true;
    isDragging = false; // 重置拖动标志
    const touch = e.touches[0]; // 获取触摸点
    startX = touch.pageX - scrollable.offsetLeft; // 获取触摸位置
    scrollLeft = scrollable.scrollLeft; // 获取当前滚动位置
    e.preventDefault(); // 阻止默认的拖动行为
});

scrollable.addEventListener('touchend', (e) => {
    isDown = false;
    if (isDragging) {
        e.preventDefault(); // 如果正在拖动，阻止默认行为
    }else{
        const target = e.target.closest('.nav-link');
        if (target) {
            // 触发菜单项的点击事件
            target.click();
        }
    }

});

scrollable.addEventListener('touchmove', (e) => {
    if (!isDown) return; // 如果没有按下鼠标，则返回
    const touch = e.touches[0]; // 获取触摸点
    const x = touch.pageX - scrollable.offsetLeft; // 获取当前触摸位置
    if(Math.abs(x - startX) > 5){
        isDragging = true; // 设置拖动标志
    }
    const walk = (x - startX) * 2; // 计算拖动的距离
    scrollable.scrollLeft = scrollLeft - walk; // 更新滚动位置
    updateArrowVisibility(); // 更新箭头状态
});

// 窗口调整大小事件
window.addEventListener('resize', () => {
    updateArrowVisibility(); // 更新箭头状态
});