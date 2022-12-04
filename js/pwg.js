//password character
const upperCaselettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbolsArray = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "|",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const lowerCaseLettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const password1 = document.getElementById("password1");
const generateBtn = document.getElementById("generate-btn");
const passwordContainer = document.getElementById("password-container");
const characterLength = document.getElementById("character-length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEL = document.getElementById("uppercase");
const symbolsEL = document.getElementById("symbols");
const numberEl = document.getElementById("number");

//copy on click
passwordContainer.addEventListener("click", () => {
  document.execCommand("Copy");
});

//storing the random characters
const randomCharacter = {
  upper: loopThroughUppercase,
  lower: loopThroughLowercase,
  symbol: loopThroughSymbols,
  number: loopThroughNumber,
};
//looping through uppercase letter array
function loopThroughUppercase() {
  for (let i = 0; i < upperCaselettersArray.length; i++) {
    let randomUpperCharacter = Math.floor(
      Math.random() * upperCaselettersArray.length
    );
    return upperCaselettersArray[randomUpperCharacter];
  }
}
//loop through lowercase letter array
function loopThroughLowercase() {
  for (let i = 0; i < lowerCaseLettersArray.length; i++) {
    let randomLowercaseCharacter = Math.floor(
      Math.random() * lowerCaseLettersArray.length
    );
    return lowerCaseLettersArray[randomLowercaseCharacter];
  }
}
//looping through symbols array
function loopThroughSymbols() {
  for (let i = 0; i < symbolsArray.length; i++) {
    let randomSymbolCharacter = Math.floor(Math.random() * symbolsArray.length);
    return symbolsArray[randomSymbolCharacter];
  }
}
//looping through numbers array
function loopThroughNumber() {
  for (let i = 0; i < numbersArray.length; i++) {
    let randomNumberCharacter = Math.floor(Math.random() * numbersArray.length);
    return numbersArray[randomNumberCharacter];
  }
}

//checking true or false and generate event
generateBtn.addEventListener("click", () => {
  //true or false
  const characterAmount = +characterLength.value;
  const includeUppercase = uppercaseEL.checked;
  const includeLowercase = lowercaseEl.checked;
  const includeSymbol = symbolsEL.checked;
  const includeNumber = numberEl.checked;

  password1.innerHTML = generatePassword(
    characterAmount,
    includeLowercase,
    includeUppercase,
    includeSymbol,
    includeNumber
  );
});
//generate password
function generatePassword(length, lower, upper, symbol, number) {
  //1.initialize password variable
  let generatedPassword = "";
  //2.filter out unchecked types
  let types = lower + upper + symbol + number;
  let typesArray = [{ upper }, { lower }, { symbol }, { number }].filter(
    (item) => Object.values(item)[0]
  );

  //if any boxes are checked, if not return 0
  if (types === 0) {
    return "password";
  }

  for (let i = 0; i < length; i += types) {
    typesArray.forEach((type) => {
      const randomCharCode = Object.keys(type)[0];

      generatedPassword += randomCharacter[randomCharCode]();
    });
  }
  return generatedPassword;
}
