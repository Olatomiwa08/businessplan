let formcheckinputs = document.querySelectorAll(".form-check-input")
let explanation = document.getElementById("explanation")
let test = document.getElementsByTagName("textarea")
let res = localStorage.getItem("set")
formcheckinputs.forEach(function(formcheckinput){
    formcheckinput.addEventListener("click", function(){
        let div = document.createElement("div") 
        div.setAttribute("class","textbox")
        let text = document.createElement("textarea")
        text.t
        let label =  document.createElement("label")
        label.textContent = formcheckinput.value
        let set = text.textContent
        // localStorage.setItem("set",set.textContent)
        div.append(label)
        div.append(text)
        explanation.append(div)
        if (formcheckinput.checked == true) {
            div.classList.remove("show")
        }
        else{
            div.classList.add("show")
        }
        text.onchange = function (){
            localStorage.setItem("set", set)
            // console.log("me")
            test.textContent = "ff"
            console.log(text.textContent)
        }
    })
})


// formcheckinputs.forEach(function(formcheckinput){
//     formcheckinput.addEventListener("click", myfunction);
//     function myfunction(){
//         let div = document.createElement("div") 
//         div.setAttribute("class","textbox")
//         let text = document.createElement("textarea")
//         text.t
//         let label =  document.createElement("label")
//         label.textContent = formcheckinput.value
//         let set = text.textContent
//         // localStorage.setItem("set",set.textContent)
//         div.append(label)
//         div.append(text)
//         explanation.append(div)
//         if (formcheckinput.checked == true) {
//             div.classList.remove("show")
//         }
//         else{
//             div.classList.add("show")
//         }
//         text.onchange = function (){
//             localStorage.setItem("set", set)
//             // console.log("me")
//             test.textContent = "ff"
//             console.log(text.textContent)
//         }
//         localStorage.setItem("PageRefreshed" , true)
//     }
//     // if(localStorage.getItem("PageRefreshed")){
//     //     myfunction()
//     // }
// })

formcheckinputs.forEach(function(formcheckinput){
    formcheckinput.addEventListener("un ", myfunction);
    function myfunction(){
       
    }
    // if(localStorage.getItem("PageRefreshed")){
    //     myfunction()
    // }
})
const tabspy = document.querySelector(".tabspy")
const bar = document.querySelector(".bar")
bar.addEventListener("click", function(){
    tabspy.classList.toggle("span")
    console.log("me")
})

function Back(){
    window.location.href="industry.html"
}