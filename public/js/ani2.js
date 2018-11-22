/************* 전역 변수 선언 *****************/
var cnt = $(".ban").length; //현재 내가 가지고 있는 이미지의 갯수
var stn = 0;
var prev = cnt - 1;  //내 전에 있는 애 선언
var next = stn + 1; //나 다음에 있는 애 선언
var wid = $(".ban").width();
var hei = $(".ban").height();
var delay = 3000;
var speed = 500;

/************* 최초 Init *****************/
slideInit();  //인터벌이 일어나기전에 위치값을 잡고 있어야 하기 때문에 slideInit 한번 시작해라
var interval = setInterval(slideAni, delay); //3초마다 slideAni가 시작되어라/ 변수 선언과 동시에 setInterval 실행

/************* 페이저 Init *****************/
$(".ban").each(function (i) {
  var name = $(this).data("name");
  var link = $(this).data("link");
  var pager = '<a href="' + link + '" class="w3-bar-item w3-button">' + name + '</a>';
  $(".pager").append(pager);
  
});

/************* Slide Init *****************/
function slideInit(){ //내 양옆에 짝꿍들을 가져다 놓는다
  
  if(stn == 0){
    prev = cnt - 1;
    next = stn + 1;
  }
  else if(stn == cnt - 1){
    prev = stn - 1;
    next = 0;
  }
  else{
    prev = stn - 1;
    next = stn + 1;
  }
 
$(".ban_wrap").css({"left":-wid+"px", "height":hei+"px"});//내가 움직일 값을 주는 애 ".ban_wrap"
$(".ban").css({"left":"0px", "z-index":1 });
$(".ban").eq(stn).css({"left":wid+"px", "z-index":2});
$(".ban").eq(prev).css({"left":"0px" ,"z-index":2}); 
$(".ban").eq(next).css({"left":wid*2+"px", "z-index":2});
}

$(window).resize(function(){
  wid = $(".ban").width();
  hei = $(".ban").height();
  slideAni();
}).trigger("resieze"); //리사이즈 명령이 되면 안에 있는 모든것들은 반응형이 된다./ 리사이즈할때 wid가 변한다

/************* Slide 구현 *****************/
function slideAni(){ //slideAni는 3초 지나고 실행된다
 $(".ban_wrap").stop().animate({"left":-wid*2+"px"}, speed, function (){ // 애니메이션이 끝나면  function (){를 시작하겠습니다.
  // ban은 wrap안에서 absolute를 가지고 있기 때문에 기준점이 맨 왼쪽이고 wrap은 보여지는 화면(body)이 기준점이다 왜냐하면 wrap은 absolute를 가지고 있지 않기 때문에 부모(body)를 따라간다
   if(stn == cnt-1) stn = 0;
   else stn++;
   slideInit();

 });
}