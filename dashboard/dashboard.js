let menuButton = document.querySelector('#toggle-btn');

let navLinks = document.querySelectorAll('.filternav');

menuButton.addEventListener('click',function(){
    document.body.classList.toggle('open_nav');
    console.log("ne")
});

navLinks.forEach(navlink=>{

       navlink.addEventListener('click',function(){
        document.body.classList.remove('open_nav')
       })
})
let menuButtontwo = document.querySelector('#toggle-btntwo');