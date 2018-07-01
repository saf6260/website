var login = document.querySelector(".login");
var signUp = document.querySelector(".signUp");
var loginReq = document.querySelectorAll(".login_blank");
var signUpReq = document.querySelectorAll(".signUp_blank");

function checkLoginReq(){
    var pass = true;
    for(var i = 0; i < loginReq.length; i++){
        if(loginReq[i].value.length < 1){
            loginReq[i].placeholder += " is REQUIRED for login";
       }
    }
    return pass;
}

function checkSignUpReq(){
    var pass = true;
    for(var i = 0; i < signUpReq.length; i++){
        if(signUpReq[i].value.length < 1){
            signUpReq[i].placeholder += "is REQUIRED to sign up";
            pass = false;
        }
    }
    return pass;
}

login.addEventListener("click", function(){
    console.log("Login button works");
    checkLoginReq();
})

signUp.addEventListener("click", function(){
    console.log("Sign up button works");
    checkSignUpReq();
})
