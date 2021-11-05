// Assign HTML objects to variables
var generateBtn=document.querySelector('#generate')
var textArea=document.querySelector('#password')

// Store 4 strings for different types of password preference
const lowerCaseRange='abcdefghijklmnopqrstuvwxyz'
const upperCaseRange='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numericRange='0123456789'
const specialCharRange= "#!%(&)*+,-$./:;<=>?]@[\^_`{|}~"

// This function will write password to the #password input
function writePassword(e) {

  // Prevent taking default input
  e.preventDefault()

  // Pop-out window asking for password preference
  window.alert("Please indicate your password preference");

  // Obtain user password preference by each case
  var lowerCase=window.confirm("Lower case?");
  var upperCase=window.confirm("Upper case?");
  var numeric=window.confirm("Numeric?");
  var specialChar=window.confirm("Special characters?");
  var passwordLength=parseInt(window.prompt("password length, please enter a number between 8-128"));

  // Confirm wheter user preference is valid
  var validityCond0=(passwordLength!=NaN)
  var validityCond1=(passwordLength>=8)
  var validityCond2=(passwordLength<=128)
  var validityCond3=lowerCase||upperCase||numeric||specialChar
  var inputValidity=(validityCond0&&validityCond1&&validityCond2&&validityCond3)

  // If user provides an invalid input, pop up a message asking users to indicate their preference again
  if (! inputValidity){
    window.alert("Invalide option, please indicate again your password preference!")
    writePassword(e)
  }

  // If user provides a valid input, generate the password and put it onto the text Area
  else{

    // Create a empty address to store randomised passoword data character by character
    var password='';

    // Loop n times, where n equals to the length of the password
    for (var i=0; i<passwordLength; i++){

      // Create a range of selection based on user preference
      var selectRange=[]
      if (lowerCase){
        selectRange.push(lowerCaseRange)
      }
      if (upperCase){
        selectRange.push(upperCaseRange)
      }
      if (numeric){
        selectRange.push(numericRange)
      }
      if (specialChar){
        selectRange.push(specialCharRange)
      }

      // Each time, randomly pick one TYPE of character and then pick one character out of that type
      var randType=Math.floor(Math.random()*selectRange.length)
      var randCharId=Math.floor(Math.random()*selectRange[randType].length)
      var thisChar=selectRange[randType][randCharId]

      // Each time, update the password by adding the newly randomised character
      password += thisChar
    }

    // After the loop, update the value of text area and let it equal to password
    textArea.value = password
  }
  
}

// Add event listener to generate button, run the function once the button is pressed 
generateBtn.addEventListener("click", writePassword);