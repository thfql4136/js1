/*
if(조건) {
    조건이 참이면 실행
}
else {
    조건이 거짓이면 실행  (else{}는 생략 가능)
}

*/



var joinFn = function(){
    var f = $("#join_form");
    var username = $("input[name='username']", f).val();
    var userid = $("input[name='userid']", f).val();
    var userpw = $("input[name='userpw']", f).val();
    var usermail = $("input[name='usermail']", f).val();
    console.log(username, userid, userpw, usermail);
    if(username == ""){
        alert("이름을 입력하지 않았습니다.");
        $("input[name='username']", f).focus();
        return false; //retrun ; 을 만나면 함수를 멈추고 결과값을 전달.
    }
    if(userid == ""){
        alert("아이디을 입력하지 않았습니다.");
        $("input[name='userid']", f).focus();
        return false;
    }
    if(userpw == ""){
        alert("패스워드을 입력하지 않았습니다.");
        $("input[name='userpw']", f).focus();
        return false;
    }
    if(usermail == ""){
        alert("이메일을 입력하지 않았습니다.");
        $("input[name='usermail']", f).focus();
        return false;
    }
    //모든 입력창에 입력이 완료되어 있으면 return을 만나지 않고 여기에 옴.
    alert("회원가입이 완료되었습니다.")

};
$("#bt_join").click(joinFn);