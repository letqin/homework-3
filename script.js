// generates a variable for generateBtn
var generateBtn = document.querySelector("#generate");

// declaring variables for the selections of the password generator
const contents = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  special: "!#$%&'()*+-./:;<=>?@[]^_`{|}~"
};

// function to generate password result
function writePassword() {
    var passwordOptions = "";

  // ask how long to make password
  var length = prompt("How long? (please enter a number in this field)");

  // ask if there should be lowercase letters
  var wantLower = confirm("Do you want lowercase letters?");
  if (wantLower) {
    passwordOptions += contents.lower
  };

  // ask if there should be capital letters
  var wantUpper = confirm("Do you want capital letters?");
  if (wantUpper) {
    passwordOptions += contents.upper
  };
  
  // ask if there should be numbers
  var wantNum = confirm("Do you want to include numbers?");
  if (wantNum) {
    passwordOptions += contents.number
  };

  // ask if there should be symbols
  var wantSymbol = confirm("Do you want symbols?");
  if (wantSymbol) {
    passwordOptions += contents.special
  };

  // variable for final password result
  var passwordFinal = ""
  // for loop which generates a random password with the specified parameters
  for (let i = 0; i < length; i++) {
    passwordFinal += passwordOptions[Math.floor(Math.random()*passwordOptions.length)]
  };
  // replaces the placeholder text with the generated password
  document.getElementById("password").innerHTML = passwordFinal;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
