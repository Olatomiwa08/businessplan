let check = document.getElementById("check")
let myemail = document.getElementById("email")
let incorrectpassword = document.getElementById("incorrectpassword")
myemail.onchange = function(){
    let Myemail = myemail.value
    localStorage.setItem("saveMyemail",Myemail)
}
email.onchange = function(){
    if(email.value == localStorage.getItem("saveMyemail")){
        alert("email already exist")
    }
}
password.onchange = function(){
    let saveMypassword = password.value
    localStorage.setItem("savepassword",saveMypassword)
}

check.addEventListener("click",()=>{
    if(check.checked){
        password.setAttribute("type","text")
    }else{
        password.setAttribute("type","password")
    }
})