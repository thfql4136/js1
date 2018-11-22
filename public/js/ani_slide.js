$(window).resize(function (){
  var hei = $(".slide").height();
  $(".slides").height(hei);  //여기두 줄을 한줄로 줄이면 $(".slides").height($(".slide").height());
}).trigger("resize");  //$(window).resize() 와 $(window).trigger("resize");을 같이 쓴거와 같다.

/**********Nomal **************pgaer가 들어가면 이렇게 짜야햄*/

  var n1 = 1;
  var interval1;
  
  $("#slides1").find(".slide").each(function(){
    var name = $(this).data("name"); //data-name을 의미
    var html = '<span class="w3-bar-item w3-button" onclick="paging1(this);">'+name+'</span>'; //여기서의 this는 span을 의미
    $(this).parent().next().find(".pager").append(html); // this = .slide
  });
  var interval1 = setInterval(slide1, 3000); //3초가 지나면 aniSlide1을 실행하겠습니다.
  function slide1(){
    $("#slides1").parent().find(".pager").find("span").removeClass("w3-red");
	$("#slides1").parent().find(".pager").find("span").eq(n1).addClass("w3-red");
	$("#slides1").stop().animate({"left":-(n1*100)+"%"}, 500, function(){
		if(n1 == 5) n1 = -1;
		n1++;
    });
  }
  function paging1(obj){ 
   n1 = $(obj).index(); //클릭하는 시점에서 n1값을 돌려줘야하기때문에 이코드를 써줌
    clearInterval(interval1); //인터벌을 지운다
  
    slide1(); //슬라이드1을 실행한다
    interval1 = setInterval(slide1, 3000);
  }
  $("#slides1").hover(function (){
 clearInterval(interval1);
  }, function (){
    interval1 = setInterval(slide1, 3000);
  });
/* function banAni(){
  $(".pager > span").removeClass("w3-red"); //모든 a태그에 w3-red 클래스를 지워주세요 그리고
  $(".pager > span").eq(n1).addClass("w3-red"); 
  if(stn == cnt-1)  stn = 0; //stn은 0~5까지 돈다 
  else stn++; 
} */

/********** Infinite **************pgaer가 안들어가면 이런식으로 짜면 됨*/

/* var n2 = 1;
(function slide2(){
  $("#slides2").delay(2500).animate({"left":-(n2*100)+"%"}, 1000, function(){
    if(n2 == 6) {
      n2 = 0;
      $(this).css({"left":0});
    }
    n2++;
    slide2();
  });
})(); */

var n2 = 1;
var interval2;
$("#slides2").find(".slide").each(function(){
  var name = $(this).data("name"); //data-name을 의미
  var html = '<span class="w3-bar-item w3-button w3-white" onclick="paging2(this);">'+name+'</span>'; //여기서의 this는 span을 의미
  $(this).parent().next().find(".pager").append(html); // this = .slide
});
var interval2 = setInterval(slide2, 3000);
function slide2(){
  $("#slides2").stop().animate({"left":-(n2*100)+"%"}, 1000, function(){
    if(n2 == 6) {
      n2 = 0;
      $(this).css({"left":0});
    }
    n2++;
  });
}
function paging2(obj){ 
  n2 = $(obj).index(); 
   clearInterval(interval2); 
   slide2(); 
   interval2 = setInterval(slide2, 3000);
 }
 $("#slides2").hover(function (){
clearInterval(interval2);
 }, function (){
   interval2 = setInterval(slide2, 3000);
 });

/********** Pingpong ***************/
/* var n3 = 1;
var chk = 1;
(function slide3(){
$("#slides3").delay(1500).animate({"left":-(n3*100)+"%"}, 700, function(){
  if(n3 == 0) chk = 1;
  else if (n3 == 5) chk = -1;
  n3 += chk;
  slide3();
});
})(); */
var n3 = 1;
var interval3;
var chk = 1;
$("#slides3").find(".slide").each(function(){
  var name = $(this).data("name"); //data-name을 의미
  var html = '<span class="w3-bar-item w3-button w3-white" onclick="paging3(this);">'+name+'</span>'; //여기서의 this는 span을 의미
  $(this).parent().next().find(".pager").append(html); // this = .slide
});
var interval3 = setInterval(slide3, 3000);
function slide3(){
  $("#slides3").stop().animate({"left":-(n3*100)+"%"}, 700, function(){
    if(n3 == 0) chk = 1;
    else if (n3 == 5) chk = -1;
    n3 += chk;
  });
}
function paging3(obj){ 
  n3 = $(obj).index(); 
   clearInterval(interval3); 
   slide3(); 
   interval3 = setInterval(slide3, 3000);
 }
 $("#slides3").hover(function (){
clearInterval(interval3);
 }, function (){
   interval3 = setInterval(slide3, 3000);
 });


/********** FadeInOut ***************/
/* var n4 = 0;
var depth = -1;
(function slide4(){
  $("#slides4 .slide").eq(n4).css({"display":"none", "z-index":depth++}).delay(2000).fadeIn(1000, function(){
    if(n4 == 5) n4 = -1;
    n4++;
    slide4();
  });
})(); */

var n4 = 0;
var interval4;
var depth = -1;
$("#slides4").find(".slide").each(function(){
  var name = $(this).data("name"); //data-name을 의미
  var html = '<span class="w3-bar-item w3-button w3-white" onclick="paging4(this);">'+name+'</span>'; //여기서의 this는 span을 의미
  $(this).parent().next().find(".pager").append(html); // this = .slide
});
var interval4 = setInterval(slide4, 3000);
function slide4(){
  $("#slides4 .slide").eq(n4).css({"display":"none", "z-index":depth++}).stop().fadeIn(1000, function(){
    if(n4 == 5) n4 = -1;
    n4++;
  });
}
function paging4(obj){ 
  n4 = $(obj).index(); 
   clearInterval(interval4); 
   slide4(); 
   interval4 = setInterval(slide4, 3000);
 }
 $("#slides4").hover(function (){
clearInterval(interval4);
 }, function (){
   interval4 = setInterval(slide4, 3000);
 });

/********** Vertical ***************/
/* var n5 = 1;
(function slide5(){
  var hei = $(".slide").height();
  $("#slides5").delay(2500).animate({"top":-(n5*hei)+"px"}, 1000, function(){
    if(n5 == 6) {
      n5 = 0;
      $(this).css({"top":0});
    }
    n5++;
    slide5();
  });
})(); */

var n5 = 1;
var interval5;
$("#slides5").find(".slide").each(function(){
  var name = $(this).data("name"); //data-name을 의미
  var html = '<span class="w3-bar-item w3-button w3-white" onclick="paging5(this);">'+name+'</span>'; //여기서의 this는 span을 의미
  $(this).parent().next().find(".pager").append(html); // this = .slide
});
var interval5 = setInterval(slide5, 3000);
function slide5(){
  var hei = $(".slide").height();
  $("#slides5").stop().animate({"top":-(n5*hei)+"px"}, 1000, function(){
    if(n5 == 6) {
      n5 = 0;
      $(this).css({"top":0});
    }
    n5++;
  });
}
function paging5(obj){ 
  n5 = $(obj).index(); 
   clearInterval(interval5); 
   slide5(); 
   interval5 = setInterval(slide5, 3000);
 }
 $("#slides5").hover(function (){
clearInterval(interval5);
 }, function (){
   interval5 = setInterval(slide5, 3000);
 });