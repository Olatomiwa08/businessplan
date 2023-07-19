let formcheckinputs = document.querySelectorAll(".form-check-input")
let explanation = document.getElementById("explanation")
let test = document.getElementsByTagName("textarea")
let res = localStorage.getItem("set")
formcheckinputs.forEach(function(formcheckinput){
    formcheckinput.addEventListener("click", function(){
        let div = document.createElement("div") 
        div.setAttribute("class","textbox")
        let text = document.createElement("textarea")
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
            console.log(label.textContent)
        }
    })
})
// console.log(test)

// let mycheck = document.querySelectorAll("")