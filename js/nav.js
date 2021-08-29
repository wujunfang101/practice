var container = document.querySelector('.nav');
var labels = document.querySelectorAll('.label');
var line = document.getElementsByClassName('line')[0];
 //变量，记录下划线滑动的初始位置
var initial = 20; 
 // 变量，记录上一次下划线所在位置
var star = 20;
 // 定时器名字
 var time;

 labels.forEach(function(item){
     // 给每个标签绑定点击事件
     item.onclick = function(){         
         // 遍历labels数组，排他思想，清除掉标签所有的active类
         labels.forEach(function(temp){
             temp.classList.remove("active")
         })
         // 给当前获得点击的标签添加active类
         item.classList.add("active");
         // 清除定时器
         clearInterval(time);
         // 给动画函数传值，itemsetLeft为该标签距离底层盒子左侧距离，就是终点值
         animation(item.offsetLeft);
         // 记录下来
         star = item.offsetLeft;
     }
     
     // 给每个标签绑定鼠标经过事件
     item.onmouseover= function(){       
         // 一样的设置动画    
         clearInterval(time);
         animation(item.offsetLeft);
     }
      // 给每个标签绑定鼠标离开事件
     item.onmouseout= function(){       
         //清除定时器    
         clearInterval(time);
         //下划线又回到起点
         animation(star);
     }
 })
 // 动画
 function animation(goal){
     //动画初始位置为下划线距离左侧位置
    initial = line.offsetLeft;
    // 定时器，实现缓动动画，慢慢滑动的效果
     time = setInterval(function(){
         // 每次自增(goal-initial)/10，我为10，越小滑动越快
          initial += (goal-initial)/10;
         // 给下划线添加left定位
          line.style.left = initial +'px';        
          // 如果滑到目标值，清除定时器
          if(line.offsetLeft==goal){
              clearInterval(time);
          }    
     },30)
 }