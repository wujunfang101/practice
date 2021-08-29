var leftBtn = document.querySelector(".btnList .left")
var rightBtn = document.querySelector(".btnList .right")
var imgLists = document.querySelectorAll(".swiper .imgItem")
var circleDivs = document.querySelectorAll(".swiper .circleItem")
var currentImg = 0;


//点击箭头轮播图片
rightBtn.onclick =function(){
    currentImg = currentImg + 1 ;
    if(currentImg >= imgLists.length){
        currentImg = 0;
    }
    renderNumImg();

}


leftBtn.onclick =function(){
    currentImg = currentImg - 1 ;
    if(currentImg < 0){
        currentImg = imgLists.length-1;
    }
   renderNumImg();
}

function renderNumImg(){
    imgLists.forEach(function(item,i){
        item.classList.remove("active")
    })

    circleDivs.forEach(function(item,i){
        item.classList.remove("active")
    })


    imgLists[currentImg].classList.add('active')
    circleDivs[currentImg].classList.add('active')
}


//点击小圆点轮播图片
var circleListDiv = document.querySelector(".circleList")
circleListDiv.onclick = function(event){
    if(event.target.classList.contains("circleItem")){
        var index = parseInt(event.target.id[1])
        currentImg = index;
        renderNumImg()
    }
}


//自动播放
function moveBan(){
        for(var i=0;i<imgLists.length;i++){
            currentImg = i;
        }
        timer = setInterval(function(){
            if(currentImg==imgLists.length)
            currentImg =  0;
            renderNumImg();
            currentImg++;
    },2000);

}

moveBan();


