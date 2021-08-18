// generates a variable for generateBtn
var generateBtn = document.querySelector("#generate");

// function to create actual password with user selections
const contents = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!#$%&'()*+-./:;<=>?@[]^_`{|}~",
  number: "0123456789"
};

function writePassword() {
    var passwordOptions = "";
  // ask how long to make password
  var howLong = prompt("How long?");
  // ask if there should be lowercase letters
  var wantLower = confirm("Do you want lowercase letters?");
  // ask if there should be capital letters
  if (lower) {
    passwordOptions +- characters.lower
  }
  var wantUpper = confirm("Do you want capital letters?");
  // ask if there should be numbers
  var wantNum = confirm("Do you want to include numbers?");
  // ask if there should be symbols
  var wantSymbol = confirm("Do you want symbols?");
   
};

console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
