/*
$("#bt1").click(function(){
    $("#box1").animate({"left":"1600px"}, 1000);
    $("#box1").animate({"left":"100px"}, 1000);

});

$("#bt2").click(function(){
    $("#box2").animate({"left":"1600px"}, 1000);
    $("#box2").animate({"top":"500px"}, 1000);
    $("#box2").animate({"left":"100px"}, 1000);
    $("#box2").animate({"top":"350px"}, 1000);
    

});
*/

/*
$("#bt1").click(function(){
    $("#cj").animate({"left":"0px"});
});
$("#bt2").click(function(){
    $("#cj").animate({"left":"-1200px"});
});
$("#bt3").click(function(){
    $("#cj").animate({"left":"-2400px"});
});
*/

/* $("#bt1").click(function(){
    $("#images1").fadeOut(1000);
    $("#images2").fadeIn(1000);
    
});
$("#bt2").click(function(){
    $("#images2").fadeOut(1000);
    $("#images3").fadeIn(1000);
    
});
$("#bt3").click(function(){
    $("#images3").fadeOut(1000);
    $("#images4").fadeIn(1000);
}); */

var depth = 10;
$("#bt1").click(function(){
	$(".banners li").eq(0).hide();
	$(".banners li").eq(0).css({"z-index": depth++});
	$(".banners li").eq(0).fadeIn(500);
});
$("#bt2").click(function(){
	$(".banners li").eq(1).hide();
	$(".banners li").eq(1).css({"z-index": depth++});
	$(".banners li").eq(1).fadeIn(500);
});
$("#bt3").click(function(){
	$(".banners li").eq(2).hide();
	$(".banners li").eq(2).css({"z-index": depth++});
	$(".banners li").eq(2).fadeIn(500);
});