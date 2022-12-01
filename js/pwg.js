const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const generateBtn = document.getElementById("generate-btn");

//password character
const passwordData = [
  "!dhg87/p0>ds*65",
  "#j7$d9%o6>2k*u7",
  "@3l%k6&h4&T8#r4",
  "&x7&j5$b4@s8!d8",
  "%sdfa&f9%909asd",
  "$y9135sdfe&!@d8",
  "K34ls#$%4@s8!d8",
];

generateBtn.addEventListener("click", () => {
  let randomPassword1 = Math.floor(Math.random() * passwordData.length);
  let randomPassword2 = Math.floor(Math.random() * passwordData.length);
  password1.innerText = passwordData[randomPassword1];
  password2.innerText = passwordData[randomPassword2];
});
