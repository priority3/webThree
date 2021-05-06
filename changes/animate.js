function animate(obj,target,callback){
    // 如果存在定时器的话就清除
    // console.log (callback);
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 移动的距离 (目标距离-现在距离)/15;
        // 若为整数像上取整，若为负数向下取整
        let step = (target-obj.offsetLeft)/15;
        step = (step>0) ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            // 达到目标后清除定时器
            clearInterval(obj.timer);
            // 到达目标位置后，执行回调函数
            if (callback){
                // 如果存在则执行回调函数
                callback();
            }
        }else { 
            obj.style.left = obj.offsetLeft +step + 'px';
        }
    },10)
}