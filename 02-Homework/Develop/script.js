// generates a variable for generateBtn
var generateBtn = document.querySelector("#generate");

// // lowercase letter generator, chooses 26 numbers from charcode 97
// function lowercase() {
//   return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97 );
// };

// // capital letter generator, chooses 26 numbers from charcode 65
// function capital() {
//   return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65 );
// };

// // generates a random number from charcode 48
// function number() {
//   return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48 );
// };

// // generates first set of special characters from charcode 33 - 47
// function specialOne() {
//   return String.fromCharCode(Math.floor(Math.random() * 15 ) + 33 );
// };
// // generates second set of special characters from charcode 58 - 96
// function specialTwo() {
//   return String.fromCharCode(Math.floor(Math.random() * 39 ) + 58 );
// };

// // generates first set of super special characters from charcode 161 - 172
// function superSpecialOne() {
//   return String.fromCharCode(Math.floor(Math.random() * 12 ) + 161 );
// };
// // generates second set of super special characters from charcode 174 - 255
// function superSpecialTwo() {
//   return String.fromCharCode(Math.floor(Math.random() * 82 ) + 174 );
// };

// function to create actual password with user selections
const contents = {
  lower = "abcdefghijklmnopqrstuvwxyz",
  upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special = "!#$%&'()*+-./:;<=>?@[]^_`{|}~",
  number = "0123456789",
};

function writePassword() {
  var passwordOptions = "";
};

var howLong = prompt("How long?");

var wantLower = prompt("Do you want lowercase letters?");

var wantUpper = prompt("Do you want capital letters?");

var wantNum = prompt("Do you want to include numbers?");

var wantSymbol = prompt("Do you want symbols?");

var lower = confirm("Lowercase letters?")
if (lower) {
  passwordOptions +- characters.lower
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
