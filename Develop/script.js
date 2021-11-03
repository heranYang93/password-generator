// Assignment Code
window.alert("Please tell us your password preference");
var lowerCase=window.confirm("Lower case?");
var upperCase=window.confirm("Upper case?");
var numeric=window.confirm("Numeric?");
var specialChar=window.confirm("Special characters?");
var passwordLength=parseInt(window.prompt("password length, please enter a number between 8-128"));

function (cond1, cond2, cond3, length) {
  var password='';
  var passwordLength=10;

  while (password.length<passwordLength){
    var randomNumber=(Math.floor(Math.random()*128))
    var singleChar=String.fromCharCode(randomNumber)
    password=password.concat(singleChar)
  }

  return(password)
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
