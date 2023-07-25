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