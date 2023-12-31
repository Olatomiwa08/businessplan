let Yes = document.getElementById("showhowmuch")
let deletehowmuch = document.querySelectorAll(".delete")
let howmuch = document.getElementById("howmuch")
Yes.addEventListener("click",function(){
   howmuch.style.display = "flex"
})

deletehowmuch.forEach(deletehowmuch => {
    deletehowmuch.addEventListener("click", ()=>{
        howmuch.style.display = "none"
    })
})

const dropdowns = document.querySelector(".dropdown")
const select = document.querySelector(".select")
const caret = document.querySelector(".caret")
const menu = document.querySelector(".menu")
const options = document.querySelectorAll(".menu li")
const selected = document.querySelector(".selected")

select.addEventListener("click", ()=>{
    select.classList.toggle("select-clicked")
    caret.classList.toggle("caret-rotate")
    menu.classList.toggle("menu-open")
})
options.forEach(option=>{
    option.addEventListener("click",() =>{
        selected.innerText =option.innerText;
        select.classList.remove("select-clicked")
        caret.classList.remove("caret-rotate")
        menu.classList.remove("menu-open")
        localStorage.setItem("selected", selected.innerText)
        options.forEach(option=>{
            option.classList.remove("active")
        })
        option.classList.add("active")
    })
})

const tabspy = document.querySelector(".tabspy")
const bar = document.querySelector(".bar")
bar.addEventListener("click", function(){
    tabspy.classList.toggle("span")
    bar.classList.toggle("check")
})

function Back(){
    window.location.href="/logindirectorypage/logindirectory.html"
}