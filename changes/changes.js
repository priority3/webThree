window.addEventListener('load',function(){
    var box = document.querySelector('.box');
    var ul = box.children[0].querySelector('ul');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    // 鼠标移动上移去 左右箭头显示 消失
    box.addEventListener('mouseenter',function() {
        prev.style.display = 'block';
        next.style.display = 'block';
        // 清除定时器
        clearInterval(timer);
        timer = null;
    })
    box.addEventListener('mouseleave',function() {
        prev.style.display = 'none';
        next.style.display = 'none';
        // 开启定时器
        timer = setInterval(function(){
            next.click();
        },4000)
    })
    // 点击箭头移动ul 
    // 移动的距离为一个图片的大小 
    // 克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var Num = 0;
    // 右侧按钮
    console.log(ul.children.length);
    next.addEventListener('click',function(){

        // 最后一张则让ul的left为0
        // 保留动画效果
        if (Num == ul.children.length-1){
            ul.style.left = 0;
            Num = 0;
        }
        Num++;
        animate(ul,-Num*(box.offsetWidth));       
    })
    // 左侧按钮
    prev.addEventListener('click',function(){
        if(Num == 0){
            Num = ul.children.length-1;
            ul.style.left = -(Num)*(box.offsetWidth) + 'px';
        }
        Num--;
        animate(ul,-Num*(box.offsetWidth));
    })
    // 自动播放
    var timer = setInterval(function(){
        next.click();
    },4000)
    
})
