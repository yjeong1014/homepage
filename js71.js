var str_id = "";
var str_pw = "";

var input_id;
var input_pw;

window.onload = function(){ 

    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    div_s=document.getElementById("s");
    
}

function login(){

var local_id=input_id.value;
var local_pw=input_pw.value;

    if(local_id=="aaaa" && local_pw=="1234"){
    // alert("반갑습니다!");
        s.innerHTML="환영해요! 로그인성공!"
    } 
    else{
        // alert("ID/PW가 잘못되었습니다. 다시 입력해주세요.");
        s.innerHTML="ID또는 PW가 잘못되었습니다."
    }
}

