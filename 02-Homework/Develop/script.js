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

  var howLong = prompt("How long?");

  var wantLower = confirm("Do you want lowercase letters?");

  var wantUpper = confirm("Do you want capital letters?");

  var wantNum = confirm("Do you want to include numbers?");

  var wantSymbol = confirm("Do you want symbols?");

  if (lower) {
    passwordOptions +- characters.lower
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
