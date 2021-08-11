// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generates random numbers
console.log(Math.floor)(Math.random())

// generates all possible options for password contents
function randomLower() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
