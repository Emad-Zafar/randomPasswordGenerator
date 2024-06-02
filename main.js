const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const specialCharacters = "!@#$%^&*()";

function calculateLength(event) {
  const length = event.target.value;
  document.getElementById("length").textContent = length;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generatePassword() {
  const isCapitalChecked = document.getElementById("capitalLetters").checked;
  const isSmallChecked = document.getElementById("smallLetters").checked;
  const isNumbersChecked = document.getElementById("numbers").checked;
  const isSpecialCharactersChecked =
    document.getElementById("specialCharacters").checked;
  const length = +document.getElementById("length").textContent;

  let characterSet = "";
  let result = "";

  if (isCapitalChecked) {
    characterSet += capitalLetters;
  }

  if (isSmallChecked) {
    characterSet += smallLetters;
  }

  if (isNumbersChecked) {
    characterSet += numbers;
  }

  if (isSpecialCharactersChecked) {
    characterSet += specialCharacters;
  }

  if (!characterSet) {
    alert("Please check the boxes.");
    return;
  }

  if (!length) {
    alert("Please specify length.");
    return;
  }

  for (let i = 0; i < length; i++) {
    let randomValue = getRandomInt(0, characterSet.length);
    result += characterSet[randomValue];
  }

  document.getElementById("outputField").value = result;
}

function copyValue() {
  const copiedValue = document.getElementById("outputField").value;
  navigator.clipboard.writeText(copiedValue);

  const copied = document.getElementById("copiedButton");
  copied.style.display = "inline";

  let timeOut = setTimeout(hideButton, 3000);
}

function hideButton() {
  const copied = document.getElementById("copiedButton");
  copied.style.display = "none";
}

// popup display hidden and
// shuffel function
// setTimeout(function,seconds)
// how will i know the website is build on react
