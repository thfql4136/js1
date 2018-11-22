/* var Car = (function(){ //함수가 있고요function(){} 실행 할꺼예여()
   //Constructor(생성자)
  function Car(_parent, _color, _w, _h){  //첫번째 들어가는 함수는 변수랑 똑같이 써준다/ new Car 할때 실행된다
    this.parent = _parent;
    this.color = _color;
    this.wid = _w;
    this.hei = _h;
    // this.obj = this.parent.append('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>');
    this.obj = $('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>').appendTo(this.parent); //appendTo는 부모랑 자식이 바뀌게 한다
  }
  Car.prototype.drive = function(_speed, _tar){  //객체(Car)의 drive라는 함수(메서드)를 만들겠다 prototype.drive  = 메서드
    this.obj.click(function (){ //this > Car을 말하는것
      $(this).animate({"margin-left":_tar+"px"}, _speed); //this > 윗줄에 obj
    });
  };    
  return Car;//만들어진 결과값을 붙인다
}()); 

//new Car(부모를 jQuery로 넣어주세요, 색상을 넣어주세요, 넓이를 넣어주세요, 높이를 넣어주세요.)
var myCar = new Car($(".wrap"), "#f00", 100, 100);
var myCar2 = new Car($(".wrap"), "#00f", 200, 200);
console.log(myCar.obj);
myCar.drive(1000, 1000); //1초동안 1000px를 이동한다
myCar2.drive(5000, 500); */

/* var myCar = new Car("붕붕이");
console.log(myCar, myCar.name);

var otherCar = new Car("알수없음");
console.log(otherCar, otherCar.name) */

var Box = (function(){
  function Box(_data){ //data를 받는다
    this.obj = _data;  // _data대신 {name:"1500", color:"#f00",width:200,height:200} 들어오는것과 같다.
    this.create();
    console.log(_data);

  }
  Box.prototype.create = function(){
    var style = 'style="position:relative;';
    if(this.obj.width) //this.obj.width가 존재하면 안에 내용을 실행 할겁니다
      style += 'width:'+this.obj.width+'px;';
    if(this.obj.height) style +='height:'+this.obj.height+'px;';
    if(this.obj.bgColor) style +='background-color:'+this.obj.bgColor+';';
    if(this.obj.borderWdith) style +='border-width:'+this.obj.borderWidth+';';
    if(this.obj.borderStyle) style +='border-style:'+this.obj.borderStyle+';';
    if(this.obj.borderColor) style +='border-color:'+this.obj.bordercolor+';';
    style += '"';
    var html = '<div style="padding:20px;">';
    html += '<button class="w3-button w3-red bt_move">이동</button> ';
    html += '<button class="w3-button w3-blue bt_reset">초기화</button>';
    html += '</div>';
    this.obj.bts = $(html).appendTo($(this.obj.parent));
    html = '<div '+style+'">';
    if(this.obj.name) html += this.obj.name;
    html += '</div>';
    this.obj.box = $(html).appendTo($(this.obj.parent));
  }
  Box.prototype.init = function(_target, _speed){
    var box = this.obj.box;  //this.obj.box이거 자체가 제이쿼리
$(".bt_move", $(this.obj.bts)).click(box, function(){
  box.stop().animate({"left":_target+"px"}, _speed);  //$(this).parent().next() > box 부분과 같음
});
$(".bt_reset", $(this.obj.bts)).on("click", function(){
  box.stop().animate({"left":"0px"}, _speed);
});
  }
  return Box;
}());

var bus = new Box({
  parent:".wrap",
  name:"1500",
  bgColor:"#f00",
  borderWidth: 5,
  borderStyle: "solid",
  borderColor: "#666",
  width:200,
  height:200
});
bus.init(1000, 1000);

var bus2 = new Box({
  parent: ".wrap",
  name: "마을버스",
  bgColor: "#0f0",
  width:100,
  height:100
});
bus2.init(500, 5000);