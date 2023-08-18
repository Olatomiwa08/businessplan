let BusinessOverview = document.getElementById("BusinessOverview")
let result = document.getElementById("result")
BusinessOverview.innerHTML = localStorage.getItem("keys");
function store(){
    const keys = BusinessOverview.value;
    localStorage.setItem('keys', keys);
    console.log("me")
}

const tabspy = document.querySelector(".tabspy")
const bar = document.querySelector(".bar")
bar.addEventListener("click", function(){
    tabspy.classList.toggle("span")
    console.log("me")
})

function Back(){
    window.location.href="company.html"
}