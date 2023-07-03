// const sr = ScrollReveal ({
//     distance: '80px',
//     duration: 2500,
//     reset: true
// })

// sr.reveal('header', {delay:100, origin:'top'})
// // sr.reveal('.navbar', {delay:100, origin:'top'})
// sr.reveal('.home .input', {delay:200, origin:'bottom'})
// sr.reveal('.home h1', {delay:190, origin:'left'})
// sr.reveal('.home h1.right', {delay:190, origin:'right'})
// sr.reveal('.abouthead,.second,.firsttext p', {delay:190, origin:'left'})
// sr.reveal('.abouthead h1', {delay:200, origin:'left'})
// sr.reveal('.firsttext img', {delay:200, origin:'right'})
// sr.reveal('.transactiontext p,.transactionmobile', {delay:200, origin:'left'})



// // const hamburger = document.getElementById("hamburger");
// // const menu = document.getElementById("menu")
// // const register = document.getElementById("register")
// // hamburger.addEventListener("click",function(){
// //     hamburger.classList.toggle("shownav")
// //     menu.classList.toggle("shownav")
// //     register.classList.toggle("shownav")
// //     console.log('me')
// // })

let menuButton = document.querySelector('#toggle-btn');

let navLinks = document.querySelectorAll('.navlink');

menuButton.addEventListener('click',function(){
    document.body.classList.toggle('open_nav');
});

navLinks.forEach(navlink=>{

       navlink.addEventListener('click',function(){
        document.body.classList.remove('open_nav')
       })
})
window.onscroll =  () =>{
    document.body.classList.remove("open_nav")
    
}
