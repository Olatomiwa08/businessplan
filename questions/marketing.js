const createproductinput = document.getElementById("createproductinput")
let appendcontent = document.getElementById("appendcontent")
let contentaccordion = ` <div class="content-accordion">
<div class="question-answer">
    <div class="question">
        <h3 class="title-question"  data-placeholder='data- placeholder'>
            #
        </h3>
        <div class="spans">
            <svg xmlns="http://www.w3.org/2000/svg" class="add" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
              
            <svg xmlns="http://www.w3.org/2000/svg" class="remove" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
            </svg>                                      
        </div>
    </div>
    <div class="answer">
        <div class="coverinfo row g-3">
            <div class="col-md-6">
                <label for="inputText1" class="form-label">Product/Service Name:</label>
                <input type="text" name="ProductName" class="form-control" id="product" placeholder="Product/Service Name">
              </div>
              <div class="col-md-6">
                <label for="inputText1" class="form-label">Product/Service Price:</label>
                <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input type="number" id="inputText1" class="form-control" placeholder="Product/Service Price" aria-label="Amount (to the nearest dollar)">
                </div>
            </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Product / Service description / benefits:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Product/Service Description/Benefits"></textarea>
              </div>
        </div>
    </div>
</div>
</div>  ` + "<br>"
createproductinput.addEventListener("click",(e)=>{
    e.preventDefault()
    appendcontent.innerHTML += contentaccordion
    const questions = document.querySelectorAll('.question-answer');
    questions.forEach(function(question) {
        const btn = question.querySelector('.question');
        btn.addEventListener("click", function() {
            questions.forEach(function(item){
                if(item !== question) [
                    item.classList.remove("show-text")
                ]
            })
            question.classList.toggle("show-text");
        })
    })
    let titlequestion = document.querySelector(".title-question")
    let ProductName = document.getElementById("product")
    titlequestion.innerHTML = "#" + localStorage.getItem("ProductName")
    ProductName.oninput = function(){
        titlequestion.innerHTML = "#" + ProductName.value
       let settitlequestion = ProductName.value
        localStorage.setItem("ProductName", settitlequestion)
    }
    // titlequestion.append
})



// questions.forEach(function(question) {
//     const btn = question.querySelector('.question');
//     btn.addEventListener("click", function() {
//         questions.forEach(function(item){
//             if(item !== question) [
//                 item.classList.remove("show-text")
//             ]
//         })
//         question.classList.toggle("show-text");
//     })
// })