// 按钮点击事件
document.getElementById('clickBtn').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = '📢 最近在学习前端开发，欢迎交流！';
    
    // 5秒后隐藏消息
    setTimeout(() => {
        messageElement.textContent = '';
    }, 5000);
});

// 页面加载淡入效果
window.addEventListener('load', function() {
    document.body.style.opacity = 0;
    let opacity = 0;
    const timer = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        document.body.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
});