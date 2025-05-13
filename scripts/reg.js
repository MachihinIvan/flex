/*const loginInputForm = document.querySelector(".loginInputForm")
const regContainer = document.querySelector(".regContainer")
//let re = /[а-ёяА-ЁЯ\s]/u;
let re = /[a-zA-Z\s]/;



loginInputForm.addEventListener("input", function() {
    const oldError = regContainer.querySelector(".login-error");
    if (oldError) oldError.remove();
    if (loginInputForm.value && re.test(loginInputForm.value)){
        const loginMistake = document.createElement("div")
        loginMistake.textContent = "Можно использовать только кириллицу"
        loginMistake.classList.add("login-error")
        regContainer.appendChild(loginMistake)
        
     }
  });
*/