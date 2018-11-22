//type normal/pingpong/infinite
var banner = new Slide($("#slides1"), { //$("#slides1")필수 인자
	type: "normal", //normal, pingpong, infinite, verical, fade ->기본값 normal
	delay: 3000,//애니메이션 장면 전환 대기 속도 ->기본값 2000
	speed: 600, //애니메이션 속도 ->기본값 300
	hover: true, //Hover했을 때 true면 멈충 ->기본값 true
	pager: true, //pager가 true면 나타남 ->기본값 false
	link:true, //link가 true면 이미지를 클릭하면 링크주소로 이동한다.
	target: "_blank",//'_self(현재 창에서 링크 이동), _blank(새창에서 링크 이동)'/target은 자바스크립트
	pagerPos: "bottom", //pager 기준위치 (top/bottom) ->기본값 bottom
	pagerVal: "0px", //pager 기준 위치로 부터의 값 ->기본값 0px
	pagerSymbol: "●", //pager 심볼 사용 여부 (제목으로 사용 시 기재 안함) ->기본값 null
	pagerDefClass: "w3-text-white", //pager 기본 색상 (선택 시 텍스트 컬러/심볼 미 사용시 바탕 컬러) ->기본값 w3-white
	pagerActClass: "w3-text-red" //선택 된 pager 색상 ->기본값 w3-red
});

var banner = new Slide($("#slides2"), {
	type: "pingpong",
	delay: 1200,
  speed: 600,
  hover: true,
	pager: true, //페이저를 사용하겠다 = 페이저를 보여준다
	link:true,
	target: "_blank",
  pagerPos: "bottom",
	pagerVal: "10px",  //bottom or top을 기준으로 얼마나 떨어져 있느냐
	pagerDefClass: "w3-dark-grey",
	pagerActClass: "w3-blue"
});

var banner = new Slide($("#slides3")); 

var banner = new Slide($("#slides4"), {
	type: "vertical",
	delay: 1600,
	speed: 800
});

var banner = new Slide($("#slides5"), {
	type: "fade",
	delay: 1800,
	speed: 900
});

