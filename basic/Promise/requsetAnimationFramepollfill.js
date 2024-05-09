var lastTime = 0
window.requestAnimationFrame = function(callback) {
    var now = Date.now();
    // 确保下一次执行回调的时间大于等于上一次执行回调的时间加上一个最小时间间隔（约16毫秒），以模拟浏览器的动画帧频率
    var nextTime = Math.max(lastTime + 16, now);
    return setTimeout(function() {
        lastTime = nextTime
        callback(lastTime);
    }, nextTime - now); // 从现在到下一次执行回调函数的时间间隔。
};