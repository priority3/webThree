var menu = document.querySelector('.menu');
var box = document.querySelector('.box');
// mask 阴影
var mask = document.querySelector('.blackmask');
// console.dir(mask);
var body = document.querySelector('body');
// 菜单小盒子
var menupic = document.getElementById('menupic');
// 叉叉小盒子
var delepic = document.getElementById('delepic');
console.dir (box);
console.log (box);
// menu点击 弹出菜单栏
// console.log(menu.offsetLeft)
// 修改菜单栏 blackmask的可视高度
menupic.addEventListener('click',function(){
    mask.style.display = 'block';
    animate(menu,0);
    // 让box 和 mask 右移


    // 问题
    // 这个box移动无效，和官网的效果有些差距
    animate(box,300);
})

// 盒子点击 menu菜单移动回去
mask.addEventListener('click',function(){
    if(menu.offsetLeft == 0 ){
        // 让masx消失
        mask.style.display = 'none';
        animate(menu,-500);
        animate(box,-300);
        
    }
    
})
delepic.addEventListener('click',function(){
    if (menu.offsetLeft == 0){
        mask.style.display = 'none';
        animate(menu,-500);
        animate(box,-300);
        
    }
})