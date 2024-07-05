
let loginForm = document.getElementById('loginForm')
let check = document.getElementById("check")
let incorrectpassword = document.getElementById("incorrectpassword")


loginForm.onsubmit = function(event) {
    
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    let users = localStorage.getItem('users');
    
    if (!users) {
        alert('No users signed up yet.');
        event.preventDefault();
        return;
    }
    
    users = JSON.parse(users);
    
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert('Login successful!');
        emailInput.value = '';
        passwordInput.value = '';
    } else {
        alert('Invalid email or password.');
        event.preventDefault();
    }
}

check.addEventListener("click",()=>{
    if(check.checked){
        password.setAttribute("type","text")
    }else{
        password.setAttribute("type","password")
    }
})
// localStorage.setItem("savepassword","tomf")
