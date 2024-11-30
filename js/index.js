var signinEmail=document.getElementById('signinEmail')
var signinPassword=document.getElementById('signinPassword')
var signUpName=document.getElementById('signUpName')
var signupEmail=document.getElementById('signupEmail')
var signupPassword=document.getElementById('signupPassword')
var pathparts = location.pathname.split('/');
var baseURL = '';
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}
//****** validation singin ******//


//****** say welcome ******//
var username=localStorage.getItem('sessionusername')
if(username){
    document.getElementById('username').innerHTML="Welcome"+username}
    var signupArray=[];
    if(localStorage.getItem('users')!==null){
        signupArray=JSON.parse(localStorage.getItem('users'));
    }else{
        signupArray=[];
    }
    // *********************signup*********************
    function isEmpty(){
        if ( signUpName.value==""||signinPassword.value == "" || signinEmail.value == "") {
            return false
        } else {
            return true
        }
    
    }
    function signup(){
        if(isEmpty()==false){
            document.getElementById('exist').innerHTML=`<span class="text-danger mt-3">All inputs is required</span>`
            return false
        }
    }
//***************************** login *****************************//
function isLoginEmpte(){
    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }

}

function login(){
    if(isLoginEmpte()==false){
        document.getElementById('incorrect').innerHTML=`<span class="text-danger mt-3">All inputs is required</span>`
        return false
    }
    var password =signinPassword.value
    var email =signinEmail.value
   for(var i=0;i<signupArray.length;i++){
    if(   signupArray=[i].email.toLowerCase() == email.toLowerCase() && signupArray[i].password.toLowerCase() == password.toLowerCase()){
        localStorage.setItem('sessionusername',signupArray=[i].name)
        if (baseURL == '/') {
            location.replace('https://' + location.hostname + '/home.html')

        } else {
            location.replace(baseURL + '/home.html')

        }
    }
    else{
        document.getElementById('incorrect').innerHTML=`<span class="text-danger mt-3">All inputs is required</span>`
   
    }
   }
}


//***************************** logout *****************************//

function logout() {
    localStorage.removeItem('sessionUsername')
}

