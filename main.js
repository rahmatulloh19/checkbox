// var elFormInput  = document.querySelector("input")

// elFormInput.addEventListener("change", function () {
//   if(elFormInput.checked) {
//     document.body.style.backgroundColor = "#262626"
//     document.body.style.color = "#fff"  
//   }
//   else {
//     document.body.style.backgroundColor = "#fff"
//     document.body.style.color = "#000"
//   }
// })

var elFormInput = document.querySelector(".switch__input")

// console.log(elFormInput)

elFormInput.addEventListener("change", function() {
  if(elFormInput.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.removeAttribute("class");
  }
})