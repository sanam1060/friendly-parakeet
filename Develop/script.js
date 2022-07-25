// Assignment code here

//Passwords criteria; a set of rules that must be followed when creating a password.
//For the rules, we have password length, lower case letters, upper case letters, numbers, and special characters
//We can declare an object (passwordCriteria) with object properties (rules)

passwordCriteria = {
  length: 0,

  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  Number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  specialCharacter: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "\'","\"", , ",",
  ".", "/", "\\", ":", ";", "<", ">", "?", "[", "]", "`", "{", "}", "|", "~"]
};

//Intro
window.alert(
  "Welcome to Password Generator! With a few clicks we'll help you create the securiest password. \nClick OK to continue."
);


//Validate password with two conditions:

// 1. Password must be greater than 7 
// 2. Password mush be lower than 129
var passwordLengthIsValid = function (passwordLength) {  

  if ((7 < passwordLength) && (passwordLength < 129)) {
console.log(passwordLength + " 2");
    //If both conditions are true, then password length is VALID!
    return true;
  } else {
    //If one of the conditions is false, then password length is NOT VALID!
    return false;
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Generate password starts here

  function generatePassword() {
    //User must enter data
    var passwordLength = "";
    

    //If user does not enter data, prompt 
    while (!passwordLengthIsValid(passwordLength)) {
      passwordLength = window.prompt(
        "How many characters would you like your password to have? Your password must have between 8-128 characters."
      );
    }

    var passwordLowerCase = window.prompt("")
    //return passwordLength in the password box
    return passwordLength;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
