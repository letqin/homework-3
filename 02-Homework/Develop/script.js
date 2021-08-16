// generates a variable for generateBtn
var generateBtn = document.querySelector("#generate");

// function to create actual password with user selections
// const contents = {
//   lower = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
//   upper = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
//   special = "!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,],^,_,`,{,|,},~",
//   number = "0123456789",
// };

function writePassword() {
    var passwordOptions = "";

  var howLong = prompt("How long?");

  var wantLower = prompt("Do you want lowercase letters?");

  var wantUpper = prompt("Do you want capital letters?");

  var wantNum = prompt("Do you want to include numbers?");

  var wantSymbol = prompt("Do you want symbols?");

  var lower = confirm("Lowercase letters?")
  if (lower) {
    passwordOptions +- characters.lower
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
