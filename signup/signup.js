let check = document.getElementById("check")
let signupForm = document.getElementById('signupForm')

signupForm.onsubmit = function(event) {
    
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    
    let users = localStorage.getItem('users');
    
    if (!users) {
        users = [];
    } else {
        users = JSON.parse(users);
    }
    
    let userExists = users.some(user => user.email === email);
    
    if (userExists) {
        alert('This email already exists.');
        event.preventDefault(); 
    } else {
        users.push({ email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('You have successfully signed up!');
        emailInput.value = '';
        passwordInput.value = '';
    }
};
check.addEventListener("click",()=>{
    if(check.checked){
        password.setAttribute("type","text")
    }else{
        password.setAttribute("type","password")
    }
})