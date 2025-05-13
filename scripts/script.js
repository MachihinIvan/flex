document.querySelector(".foodForCat").addEventListener("click", function(){
    const foodContainer = document.querySelector(".foodContainer");
    foodContainer.classList.toggle("animate")
    setTimeout(function(){
        
        foodContainer.style.transform = "trnaslateY(0)";
    },1000)
})


const loginInputForm = document.querySelector(".loginInputForm")
const enterContainer = document.querySelector(".enterContainer")
let re = /[a-zA-Z]/;

loginInputForm.addEventListener("input", function() {
console.log(re.test(loginInputForm.value))
})

loginInputForm.addEventListener("input", function() {
    const oldError = enterContainer.querySelector(".login-error");
    if (oldError) oldError.remove();

    if (loginInputForm.value && re.test(loginInputForm.value)){
        const loginMistake = document.createElement("div")
        loginMistake.textContent = "Можно использовать только кириллицу"
        loginMistake.style.color = "white"
        loginMistake.style.backgroundColor = "red"
        loginMistake.classList.add("login-error")
        enterContainer.appendChild(loginMistake)
        console.log("!!!!!!!!!111111111111")
     }
  });


