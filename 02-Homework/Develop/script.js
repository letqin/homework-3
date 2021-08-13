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
  // generates lowercase letters
  var lowerCase
  // generates capital letters
  var capital
  // generates special characters
  var special
  // generates numbers
  var numbers
  // generates super special characters
  var verySpecial
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
