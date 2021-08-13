// generates a variable for generateBtn
var generateBtn = document.querySelector("#generate");

// function to create actual password with user selections
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
