import home from "../dashboard/home.js";
import businessplan from "../dashboard/businessplan.js";

let menuButton = document.querySelector('#toggle-btn');
const navmenu = document.getElementById("nav")
let navLinks = document.querySelectorAll('.navlink');
let filter = document.querySelector('#menufilter');

menuButton.addEventListener('click',function(){
    document.body.classList.toggle('open_nav');
});
filter.addEventListener('click',function(){
    filter.classList.remove('open_nav')
    document.body.classList.remove('open_nav');
});
navLinks.forEach(navlink=>{
    navlink.addEventListener('click',function(){
        navmenu.classList.remove("open_nav")
        document.body.classList.remove('open_nav')
    })
})
window.onscroll =  () =>{
    document.body.classList.remove("open_nav")
}


let profileButton = document.querySelector('#toggle');
const profilemenu = document.getElementById("profile")
let profilefilter = document.querySelector('#profilefilter');

profileButton.addEventListener('click',function(){
    document.body.classList.toggle('show_nav');
});
profilefilter.addEventListener('click',function(){
    profilefilter.classList.remove('show_nav')
    document.body.classList.remove('show_nav');
});
navLinks.forEach(navlink=>{
    navlink.addEventListener('click',function(){
        profilemenu.classList.remove("show_nav")
        document.body.classList.remove('show_nav')
    })
})
// window.onscroll =  () =>{
//     document.body.classList.remove("show_nav")
// }

const actives = document.querySelectorAll(".remove")

actives.forEach(active => {
    active.addEventListener('click',function(){
        actives.forEach(act => {act.classList.remove('active')})
        // document.querySelector('.active').classList.remove('active')
        this.classList.add("active")
    })
})

// document.getElementById("tothis").innerHTML += businessplan;
// document.getElementById("tothis").innerHTML += ;

$(document).ready(function(){
    // $("body").load(function(){
    //   alert("Image loaded.");
      $('main').append(home)
    // });
    $("#plan").click(function(){
        $("#tothis").replaceWith(businessplan)
    })
  });
  $(document).ready(function(){
  });
  console.log(businessplan)