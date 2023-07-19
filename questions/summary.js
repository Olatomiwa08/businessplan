let BusinessOverview = document.getElementById("BusinessOverview")
let result = document.getElementById("result")
BusinessOverview.innerHTML = localStorage.getItem("keys");
function store(){
    const keys = BusinessOverview.value;
    localStorage.setItem('keys', keys);
    console.log("me")
}
