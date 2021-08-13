// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// lowercase letter generator, chooses 26 numbers from charcode 97
function lowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97 );
};

// capital letter generator, chooses 26 numbers from charcode 65
function capital() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65 );
};

// generates first set of special characters from charcode 33 - 47
function specialOne() {
  return String.fromCharCode(Math.floor(Math.random() * 15 ) + 33 );
};
// generates second set of special characters from charcode 58 - 96
function specialTwo() {
  return String.fromCharCode(Math.floor(Math.random() * 39 ) + 58 );
};

// generates a random number from charcode 48
function number() {
  return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48 );
};

// generates first set of super special characters from charcode 161 - 172
console.log(Math.floor(Math.random() * 12 ) + 161 );
// generates second set of super special characters from charcode 174 - 255
console.log(Math.floor(Math.random() * 82 ) + 174 );

console.log(lowercase());
console.log(capital());
console.log(specialOne());
console.log(specialTwo());
console.log(number());
console.log(());
console.log(());
console.log(());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
