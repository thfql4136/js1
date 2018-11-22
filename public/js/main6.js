/*
for(초기값; 조건; 증가값) {
    실행문(조건이 참이면 반복)
}
i++ => i = i + 1
i += 5 =>i = i +5
str += "A" => str = str +"A"
*/

/*var sum = 0;
for(var i=1; i<=100000; i++){
    sum = sum + i;
    console.log(i, sum);      console을 안에 쓰면 i가 1부터 100000까지 차례대로 나오고 }바깥으로 쓰면 전체 값만 나온다.
}
*/

/*for(var i=1, sum = 0; i<=100000; i++){
    sum = sum + i; => sum +=i;
    
}
console.log(i, sum);*/

/******구구단 만들기********/
$("table").addClass("w3-table w3-centered  w3-border w3-bordered"); //addClass ->클래스 주기
$("table").css({"max-width":"1200px",  "margin":"100px auto"});
$("thead").append("<tr></tr>");
$("thead tr").append('<th class="w3-center">구분</th>');
for(i=2; i<=9; i++){
    $("thead tr").append('<th class="w3-center">'+i+'단</th>');

        // for(j=1; j<=9; j++){
        //     console.log(+i+ 'X' +j+ '=' );
        }
for(i=1; i<=9; i++){
    str = '<tr>';  //한줄 만들때
    str +='<td>' +i+ '</td>';
    for(j=2; j<=9; j++) {
        str +='<td>'+i+ 'X' +j+ '=' +j*i+ '</td>';
         //str += '<td class="w3-center">'+j*i+'</td>';
}
    //str = str + i;  str += i
    str += '</tr>'; //str = str + '</tr>';
    $("tbody").append(str);
    //console.log(str);
}
    
     
