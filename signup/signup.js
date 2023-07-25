let password = document.getElementById("password")
let check = document.getElementById("check")
let incorrectpassword = document.getElementById("incorrectpassword")
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