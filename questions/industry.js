const tabspy = document.querySelector(".tabspy")
const bar = document.querySelector(".bar")
bar.addEventListener("click", function(){
    tabspy.classList.toggle("span")
    bar.classList.toggle("check")
})
function Back(){
    window.location.href="summary.html"
}