// generates a variable for generateBtn
var generateBtn = document.querySelector("#generate");

// function to create actual password with user selections
const contents = {
  lower = "abcdefghijklmnopqrstuvwxyz"
  upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  number = "0123456789"
};

function writePassword() {
  var passwordOptions = "";
};

var length = prompt("How long?")

var lower = confirm("Lowercase letters?")
if (lower) {
  passwordOptions +- characters.lower
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
