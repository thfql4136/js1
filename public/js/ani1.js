

/* (function pagerInit(){
  var cnt = $(".ban").length; //총 .ban의 갯수를 가져온다
  var pager = [];  //pager는 배열입니다.
  $(".ban").each(function(i){ //li이들 각각에게 뭔가를 하겠다
    var name = $(this).data("name");
    var link =  $(this).data("link"); //제이쿼리에 매서드/ 데이터셋에 접근하는 방법- data-link를 가져와라
    pager[i] = '<a href="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
 
  });
  ===================== .each부분을 for으로 만든것
var cnt = $(".ban").length;
	var pager = [];
	for(var i=0; i<cnt; i++) {
		var name = $(".ban").eq(i).data("name");
		var link = $(".ban").eq(i).data("link");
		pager[i] = '<a href="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
  }
  ================================
	
  pager.forEach(function(item){ //pager가 가지고 있는 item(배열)(객체)를 각각 돌린다
    $(".pager").append(item); //여기서 item은  pager[i] = '<a href="'+link+'" class="w3-bar-item w3-button">'+name+'</a>'; 을 의미
  });
})();  

=============================== .foreach부분을 for문으로 만든것
for(var i=0; i<cnt; i++) {
  $(".pager").append(pager[i]);
};
==================================
*/

/* (function bannerInit(){ //function(){} 이렇게 써도 상관 없음
$(".ban").each(function(){  //function(i) > i 안넣어도 됨.
// var html =  '<a href="'+$(this).data('link')+'" class="w3-bar-item w3-button">'+$(this).data('name')+'</a>';  ->> 이걸 쓰면 아래에 $(".pager").append(html); 붙여줘야함
$('.pager').append('<a href="'+$(this).data('link')+'" class="w3-bar-item w3-button" onClick="pageSel(this);">'+$(this).data('name')+'</a>');
//this부분에 .ban라고 쓰면 첫번째 li만 반복되어 나타나짐, 반드시 this라고 해야함
});

})(); */



/****** 시간에 맞춰서 배너가 움직이고/ hover가 들어가면 interval 멈췄다가 재생되고/ 글자버튼 선택하면 그에 맞는 이미지를 보여준다 ******/
(function banFadeInOut(){
  var cnt = $('.ban').length; // li의 갯수가 cnt로 들어간다 / 6개
  var stn = 0; //0번이미지부터 작업하고 싶어요/ 
  var dep = 1;
  var interval = setInterval(banAni, 4000); //banAni라는 함수를 3초마다 실행해주세요
  $(".ban").each(function(){  
    $('.pager').append('<a href="'+$(this).data('link')+'" class="w3-bar-item w3-button">'+$(this).data('name')+'</a>');
    });
    $(".pager > a").click(function (){
      clearInterval(interval);
      stn = $(this).index(); //a태그(나=this)의 순서를 가져와
      banAni();
      interval = setInterval(banAni, 4000);
    });
 
  function banAni(){ //banAni라는 함수 생성
    $(".ban").eq(stn).css({"z-index":dep++, "opacity":0}); //stn에 숫자가 들어가면 그 순서의 이미지가 맨 위로 올라온다/ 
    $(".ban").eq(stn).stop().animate({"opacity":1}, 1000);
    $(".pager > a").removeClass("w3-red"); //모든 a태그에 w3-red 클래스를 지워주세요 그리고
    $(".pager > a").eq(stn).addClass("w3-red"); // 순서에 따라 w3-red 클래스를 넣어주세요.
    if(stn == cnt-1)  stn = 0; //stn은 0~5까지 돈다 
    else stn++; //stn이 5가 아니라면 하나를 더 더해주세요
  }
 $(".ban_wrap").hover(function(){ //마우스를 올리면 인터벌을 삭제했다가(이미지가 넘어가지 않는다) 마우스를 때면 다시 인터벌을 준 부분 (이미지가 다시 4초간격으로 넘어간다)
  clearInterval(interval);//()안에 있는걸 지워주세요
 }, function(){
  interval = setInterval(banAni, 4000);
 });

})();


/****** 위에 부분을 다르게 구현 ******/
/* (function banFadeInOut(){
  var cnt = $('.ban').length; // li의 갯수가 cnt로 들어간다 / 6개
  var stn = 0; //0번이미지부터 작업하고 싶어요/ 
  var interval = setInterval(functon (){
 $(".ban").css("z-index", 1); //모든 li들을 1번으로 가져다 놓고
    $(".ban").eq(stn).css("z-index", 2); 
    if(stn == cnt-1)  stn = 0; 
    else stn++; 
  }, 4000);
  })(); */

  