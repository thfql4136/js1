var WheelScroll = (function () {
    function WheelScroll(_opt) {
        // console.log(this); 1
        var obj = this;
        if (_opt) {
            if (_opt.page) this.page = $(_opt.page);
            else this.page = $(".page");
            if (_opt.speed) this.page = _opt.speed;
            else this.speed = 200;

        } else { //else가 걸리는건 var pages = new WheelScroll(); 여기부분,사용자가 아무것도 안적었을때
            this.page = $(".page");
            this.speed = 200;
        }

        this.scTop = $(window).scrollTop();
        this.gap = [];
        this.oldNow = 0;
        this.now = 0;
        this.dir = 0;
        this.speedGap = 0;
        $(window).resize(function () {
            $(obj.page).each(function (i) {
                obj.gap[i] = $(this).offset().top;
            });
        }).trigger("resize");
        this.init(this);
        if(_opt.nav) { //_opt은 wheel.js에 있는 옵션값들
            this.navAdd(obj, _opt.nav);
        }

    }
    WheelScroll.prototype.init = function (obj) {
        $(window).on("mousewheel DOMMouseScroll", wheelFn);
        // console.log(this); 1번과 같은 결과

        function wheelFn(e) {
            e.preventDefault();
            e.stopPropagation();
            obj.dir = e.originalEvent.wheelDelta;
            obj.scTop = $(window).scrollTop();
            $(window).off("mousewheel DOMMouseScroll");
            for (var i = 0; i < obj.gap.length; i++) {
                if (obj.scTop <= obj.gap[i]) {
                    obj.now = i;
                    break; //남는게 있어도 braek만나면 나온다
                }
            }
            obj.oldNow = obj.now;
            
            if (obj.dir > 0) { //휠 올렸을때
                if (obj.now > 0) obj.now--;
            } else { //휠 내렸을때
                if (obj.now < obj.gap.length - 1) obj.now++;
            }
            obj.speedGap = Math.abs(obj.now - obj.oldNow); //절대값
            obj.animation(obj, function () {
                $(window).on("mousewheel DOMMouseScroll", wheelFn);
            });
            
        }
        /*  e.preventDefault();
         e.stopPropagation();
         var direction = e.originalEvent.wheelDelta; 
         $(window).off("mousewheel DOMMouseScroll");
         scTop = $(window).scrollTop();
       
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
          }); */
    }
    WheelScroll.prototype.navAdd = function(obj, navObj){
        $(navObj).on("click", function(){
            obj.oldNow = obj.now;
            obj.now = $(this).data("now"); //가야될 페이지
            obj.animation(obj, null);
        });
    }
    WheelScroll.prototype.animation = function(obj, fn){ //위에있는 function이 fn
        obj.speedGap = Math.abs(obj.now - obj.oldNow); //절대값
        $("html, body").stop().animate({ 
            "scrollTop": obj.gap[obj.now] +"px" }, obj.speed*obj.speedGap, fn);
    }
    return WheelScroll;
}());