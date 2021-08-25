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
  // var howLong = prompt("How long?");

  // ask if there should be lowercase letters
  var wantLower = confirm("Do you want lowercase letters?");
  if (wantLower) {
    passwordOptions +- contents.lower
  };

  // ask if there should be capital letters
  var wantUpper = confirm("Do you want capital letters?");
  if (wantUpper) {
    passwordOptions +- contents.upper
  };
  
  // ask if there should be numbers
  var wantNum = confirm("Do you want to include numbers?");
  if (wantNum) {
    passwordOptions +- contents.number
  };

  // ask if there should be symbols
  var wantSymbol = confirm("Do you want symbols?");
  if (wantSymbol) {
    passwordOptions +- contents.wantSymbol
  };
   
};

var password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
