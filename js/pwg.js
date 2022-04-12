let generateBtn = document.getElementById("generate-btn");
let passwordList = document.querySelector(".list");
let password1 = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let password3 = document.querySelector("#password3");
let password4 = document.querySelector("#password4");
let message = document.querySelector("#message");

//array
let randomPasswords = ["48b2m2!@#", "2/+3k3$%p50", "564t8w4#$", "9#%$*210!@!"];

generateBtn.addEventListener("click", () => {
  for (let i = 0; i < randomPasswords.length; i++) {
    password1.innerHTML = randomPasswords[0];
    password2.innerHTML = randomPasswords[1];
    password3.innerHTML = randomPasswords[2];
    password4.innerHTML = randomPasswords[3];
  }
  message.innerHTML = "Choose a password";
});
