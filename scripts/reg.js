const loginInputForm = document.querySelector(".loginInputForm")
const regContainer = document.querySelector(".regContainer")
const regSubmitHref = document.querySelector(".regSubmitHref")
const emailImput = document.querySelector(".emailImput")


//let re = /[а-ёяА-ЁЯ\s]/u;
let re = /[a-zA-Z\s]/;
let reEm = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


loginInputForm.addEventListener("input", function() {
    const oldError = regContainer.querySelector(".login-error");
    if (oldError) {
        oldError.remove();
        regSubmitHref.style.background = "rgb(250, 147, 63)"
    }
    if (loginInputForm.value && re.test(loginInputForm.value)){
        const loginMistake = document.createElement("div")
        loginMistake.textContent = "Можно использовать только кириллицу"
        loginMistake.classList.add("login-error")
        regContainer.appendChild(loginMistake)
        regSubmitHref.style.background = "grey"
     }
  });

  emailImput.addEventListener("blur", function() {
    const oldError2 = regContainer.querySelector(".login-error");
    if (oldError2) {
        oldError2.remove();
        regSubmitHref.style.background = "rgb(250, 147, 63)"
    }
    if (emailImput.value && !reEm.test(emailImput.value)){
        const loginMistake2 = document.createElement("div")
        loginMistake2.textContent = "Введите Email"
        loginMistake2.classList.add("login-error")
        regContainer.appendChild(loginMistake2)
        regSubmitHref.style.background = "grey"
     }
  });