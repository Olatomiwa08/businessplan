let formcontrols = document.querySelectorAll(".form-control")
let save = document.getElementById("save")

formcontrols.forEach(formcontrol =>{
    // formcontrol.value = localStorage.getItem("key"); // get and assign the value outside 
    formcontrol.onchange = function(){
        const formName = formcontrol.name
        const formKey = formcontrol.value;
        localStorage.setItem(formName, formKey);
        // localStorage.setItem('key', formName);
    };
// resul.innerHTML = x.value
})  


// x.value = localStorage.getItem("key"); // get and assign the value outside 
// x.onchange = function(){
//   const key = x.value;
//   localStorage.setItem('key', key);
// };
// resul.innerHTML = x.value
