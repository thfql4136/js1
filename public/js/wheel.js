//WheelScroll.js사용하기 위해 쓰인것
var pages = new WheelScroll({
    page : ".page",
    nav : ".nav",
    speed : 200
});
// var pages = new WheelScroll();

//원래 써져있던것
/* var scTop = $(window).scrollTop(); //현재 윈도우에 탑값
var gap = [];
var now = 0;
$(window).resize(function(){
    $(".page").each(function(i){
        gap[i] = $(this).offset().top;
    });
}).trigger("resize");
$(window).on("mousewheel DOMMouseScroll", wheelFn);
function wheelFn(e){
        e.preventDefault();
        e.stopPropagation();
        var direction = e.originalEvent.wheelDelta; //-휠이 아래로, +휠이 위로
        $(window).off("mousewheel DOMMouseScroll");
        scTop = $(window).scrollTop(); //현재 윈도우에 탑값
       // offset().top  부모와(wrap) 위에서 얼마나 떨어졌는지 
       
        for(var i=0; i<gap.length; i++){
            if(scTop <= gap[i]){
                now = i;
                break; //남는게 있어도 braek만나면 나온다
            }
        }
        if(direction > 0){ //휠 올렸을때
            if(now > 0) now--;
        }
        else{ //휠 내렸을때
            if(now < gap.length-1) now++;
        }
         $("html, body").stop().animate({"scrollTop":gap[now]+"px"},200, function(){
            $(window).on("mousewheel DOMMouseScroll", wheelFn);
         });
    } 
    $(".nav").on("click", function(){
        var oldNow = now; //현재페이지
        now = $(this).data("now"); //가야될 페이지
        var speedGap = Math.abs(now - oldNow); //절대값
        $("html, body").stop().animate({"scrollTop":gap[now]+"px"},100*speedGap);
    });*/