let email = document.getElementById("email")
let password = document.getElementById("password")
let login = document.getElementById("log")
let form = document.getElementById("form")
let check = document.getElementById("check")
let incorrectpassword = document.getElementById("incorrectpassword")
password.onchange = function(){
    if(password.value !== localStorage.getItem("savepassword")){
        incorrectpassword.append("Please enter a correct password")
    }else{
        incorrectpassword.style.display = "none"
    }
}
// login.addEventListener("click",function(){
//     if(password !== localStorage.getItem("savepassword")){
//         // alert("Incorrect password, Please enter a correct password")
//         return false
//     }else if(email.value == ""){
//         alert("enter")
//     }
//     return false
// })
function validate(){
    if(password !== localStorage.getItem("savepassword")){
        // alert("Incorrect password, Please enter a correct password")
        return false
    }
    
    return ( true )
}
check.addEventListener("click",()=>{
    if(check.checked){
        password.setAttribute("type","text")
    }else{
        password.setAttribute("type","password")
    }
})
// localStorage.setItem("savepassword","tomf")
