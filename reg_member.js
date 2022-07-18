var ipId;
var ipPW;
var ipPw_re;
var ipUser_name;
var ipEmail;
var ipBirth_d;
var ipBirth_m;
var ipBirth_y;
var ipTel_1;
var ipTel_2;
var ipTel_3;

var id;
var pw;
var pw_re;
var user_name;
var email;
var birth_d
var birth_m;
var birth_y;
var tel_1
var tel_2
var tel_3

window.onload=function(){
    document.getElementById("id");
    document.getElementById("pw");
    document.getElementById("pw_re");
    document.getElementById("user_name");
    document.getElementById("email");
    document.getElementById("birth_d");
    document.getElementById("birth_m");
    document.getElementById("birth_y");
    document.getElementById("tel_1");
    document.getElementById("tel_2");
    document.getElementById("tel_3");

}

function check(){
    id=ipId.value;
    pw=ipPw.value;
    pw_re=ipPw_re.value;
    user_name=ipUser_name.value;
    email=ipEmail.value;
    birth_d=ipBirth_d.value;
    birth_m=ipBirth_m.value;
    birth_y=ipBirth_y.value;
    tel_1=ipTel_1.value;
    tel_2=ipTel_2.value;
    tel_3=ipTel_3.value;
    
    if(checkId() && checkPw() && checkPw_re() && checkEmail() && checkUserName()&& checkEmail()){
        alert("환영합니다! 회원가입이 완료되었습니다.")
    }   else{
        alert("다시 입력해주세요.")
    }
}


function checkPw(){
    if(pw.length>=4 && pw.length<=12){
    console.log("ok");
    return true;
} else {
    console.log("no");
    return false;
    }
}

// function checkEmail(){
//     if(){
//         console.log("");
//         return true;
//     }

// }   else{
//     console.log("");
//     return false;

// }