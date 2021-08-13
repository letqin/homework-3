// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// lowercase letter generator, chooses 26 numbers from charcode 97
console.log(Math.floor(Math.random() * 26 ) + 97 );
// capital letter generator, chooses 26 numbers from charcode 65
console.log(Math.floor(Math.random() * 26 ) + 65 );

// generates first set of special characters from charcode 33 - 47
console.log(Math.floor(Math.random() * 15 ) + 33 );
// generates second set of special characters from charcode 58 - 96
console.log(Math.floor(Math.random() * 39 ) + 58 );

// generates a random number from charcode 48
console.log(Math.floor(Math.random() * 10 ) + 48 );

// generates second set of super special characters from charcode 161 - 172
console.log(Math.floor(Math.random() * 26 ) +  );
// generates second set of super special characters from charcode 174 - 255
console.log(Math.floor(Math.random() * 26 ) + 97);

// generates all possible options for password contents
function randomLower() {
  // generates lowercase letters
  return String.fromCharCode(97)
}

// generates capital letters
var capital
// generates special characters
var special
// generates numbers
var numbers
// generates super special characters
var verySpecial

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
