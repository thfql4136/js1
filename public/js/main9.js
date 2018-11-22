$("#bt_list").click(function(){

$.ajax({
    url:"../json/board.json",
    tpye:"get",
    dataType:"json",
    data:{
        page:1
    },
    success: function(data){
        if(data.code == 200){
            $(".board > tbody").stop().fadeOut(500, function(){
                $(".board > tbody").empty();
                for(var i = 0; i<data.result.length; i++){
                    html = '<tr>';
                    html += '<td>'+data.result[i].no+'</td>';
                    html += '<td>'+data.result[i].title+'</td>';
                    html += '<td>'+data.result[i].wdate+'</td>';
                    html += '<td>'+data.result[i].writer+'</td>';
                    html += '</tr>';
                    $(".board > tbody").append(html);
                }
                $(".board > tbody").stop().fadeIn(500);
            });
         
        }
        else {
            alert("데이터가 이상이 있습니다.\n다시 시도해 주세요.");
        }
    },
    error: function(xhr, status, error){
        console.log(xhr, status, error);
        alert("예기치 못한 오류가 발생했습니다.\n다시 시도해 주세요.");
    }
});


});