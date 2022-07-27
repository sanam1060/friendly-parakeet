// Assignment code here

//Passwords criteria; a set of rules that must be followed when creating a password.
//For the rules, we have password length, lower case letters, upper case letters, numbers, and special characters
//We can declare an object (passwordCriteria) with object properties (rules)

passwordCriteria = {

  pwdLength: 0,

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

//Validate password with three conditions:
// 1. Password length must be greater than 7 
// 2. Password length mush be lower than 129
// 3. Password length must not have decimals

function passwordLengthIsValid(passwordLength) {  
  if ((7 < passwordLength) && (passwordLength < 129) && (!(passwordLength % 1 != 0))) {
    //If all three conditions are true, then password length is VALID!
    return true;
  } else {
    //If one of the conditions is false, then password length is NOT VALID!
    return false;
  }
};

//Check whether the user want any lower case characters in the password
function wantLowerCase (){
  if (wantLowerCase){
    true;
  } else {
    false;
  }
};

//Check whether the user want any upper case characters in the password
function wantUpperCase (){
  if (wantUpperCase){
    true;
  } else {
    false;
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
    var finalPassword = [];
    
      //Force user to enter a valid number
      while (!passwordLengthIsValid(passwordLength)) {
        passwordLength = window.prompt(
          "How many characters would you like your password to have?\nYour password must have between 8-128 characters.\nPassword length must be a whole number with no decimals."
        );
      }
    
      if (passwordLengthIsValid(passwordLength)){
        //Ask the user if they want lower case characters in the password
        if (wantLowerCase) {
          console.log("user wants lower case");
          var randomLowerCaseCharacter = passwordCriteria.lowerCase[Math.floor(Math.random() * passwordCriteria.lowerCase.length)];
          console.log(randomLowerCaseCharacter);
          //What is wrong with the code below? It returns a number
          //I need help here
          //console.log(finalPassword.push(randomLowerCaseCharacter));
        } 
      }
      
      
      //--------The End--------
      //return passwordLength in the password box
      return finalPassword;
      //passwordLength;
    
  }
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
