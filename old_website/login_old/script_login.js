const login = document.querySelector(".login");
const signUp = document.querySelector(".signUp");
const loginReq = document.querySelectorAll(".login_blank");
const signUpReq = document.querySelectorAll(".signUp_blank");

const checkLoginReq = () => {
    let pass = true;
    for(let i = 0; i < loginReq.length; i++){
        if(loginReq[i].value.length < 1){
            loginReq[i].placeholder = "REQUIRED for login";
       }
    }
    return pass;
}

const checkSignUpReq = () => {
    let pass = true;
    for(let i = 0; i < signUpReq.length; i++){
        if(signUpReq[i].value.length < 1){
            signUpReq[i].placeholder = "REQUIRED to sign up";
            pass = false;
        }
    }
    return pass;
}

login.addEventListener("click", function(){
    console.log("Login button works");
    let loginValid = checkLoginReq();
    if (loginValid){
        console.log("Credential minimums met for login");
    } else{
        console.log("Credential minimums not met for login, reprompting");
    }
})

signUp.addEventListener("click", function(){
    console.log("Sign up button works");
    let signUpValid = checkSignUpReq();
    if (signUpValid){
        console.log("Credential minimums met for Sign Up");
    } else{
        console.log("Credential minimums not met for sign up, reprompting");
    }
})
