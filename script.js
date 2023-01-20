const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

clipboardEl.addEventListener("click", () => {
  if (resultEl.innerHTML == "") {
    alert("Generate Your Password First !");
  } else {
    try {
      navigator.clipboard.writeText(resultEl.innerHTML);
      resultEl.style.backgroundColor = "#B2B2B2";
      setTimeout(() => {
        resultEl.style.color = "yellow";
      }, 3000);
      alert(`Password has been copied : ${resultEl.innerText}`);
    } catch (e) {
      alert("operation failed", e);
    }
  }
});

// object
randomFunc = {
  lower: function getRandomLower() {
    return "abcdefghigklmnopqrstuvwxyz";
  },
  upper: function getRandomUpper() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  },
  number: function getRandomNumber() {
    return "0123456789";
  },
  symbol: function getRandomSymbol() {
    return "!%.@$&*";
  },
};

// click Event
generateEl.addEventListener("click", () => {
  generatePassword(
    randomFunc.lower(),
    randomFunc.upper(),
    randomFunc.number(),
    randomFunc.symbol(),
    lengthEl.value
  );
});

function generatePassword(lowerCase, upperCase, number, symbol, length) {
  let letters = "";
  if (lowercaseEl.checked) {
    letters = letters + lowerCase;
    console.log(letters);
  }
  if (uppercaseEl.checked) {
    letters = letters + upperCase;
    console.log(letters);
  }
  if (numbersEl.checked) {
    letters = letters + number;
    console.log(letters);
  }
  if (symbolsEl.checked) {
    letters = letters + symbol;
    console.log(letters);
  }
  let randomPasswords = "";
  for (let i = 0; i < length; i++) {
    randomPasswords += letters[Math.floor(Math.random() * letters.length)];
  }
  resultEl.innerText = randomPasswords;
}
