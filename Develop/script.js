// Assignment code here

//Passwords criteria; a set of rules that must be followed when creating a password.
//For the rules, we have password length, lower case letters, upper case letters, numbers, and special characters
//We can declare an object (passwordCriteria) with object properties (rules)

passwordCriteria = {
  pwdLength: 0,

  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",],

  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",],

  number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  specialCharacter: ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","'",'"',",",".","/","\\",":",";","<",">","?","[","]","`","{","}","|","~",]
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
  if (7 < passwordLength && passwordLength < 129 && !(passwordLength % 1 != 0)) {
    //If all three conditions are true, then password length is VALID!
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
    var finalPassword = [];
    //Force user to enter a valid number
    while (!passwordLengthIsValid(passwordLength)) {
      passwordLength = window.prompt(
        "How many characters would you like your password to have?\nYour password must have between 8-128 characters.\nPassword length must be a whole number with no decimals."
      );
    }

    //Ask the user if they want lower case characters in the password
    if (passwordLengthIsValid(passwordLength)) {
      wantLowerCase = window.confirm("Would you like your password to have LOWER CASE characters?");
      
      while (finalPassword.length < passwordLength) {
        if (wantLowerCase) {
          randomLowerCaseCharacter = passwordCriteria.lowerCase[Math.floor(Math.random() * passwordCriteria.lowerCase.length)];
          console.log(randomLowerCaseCharacter);
          finalPassword.push(randomLowerCaseCharacter);
          console.log("finalPassword: " + finalPassword);
        }
        
        wantUpperCase = window.confirm("Would you like your password to have UPPER CASE characters?");
        if (wantUpperCase){
          randomUpperCaseCharacter = passwordCriteria.upperCase[Math.floor(Math.random() * passwordCriteria.upperCase.length)];
          console.log(randomUpperCaseCharacter);
          finalPassword.push(randomUpperCaseCharacter); 
          console.log("finalPassword: " + finalPassword);
        }

        wantNumbers = window.confirm("Would you like your password to have NUMBERS?");
        if(wantNumbers){
          randomNumer = passwordCriteria.number[Math.floor(Math.random() * passwordCriteria.number.length)];
          console.log(randomNumer);
          finalPassword.push(randomNumer);
          console.log("finalPassword: " + finalPassword);
        }

        wantSpecialCharacters = window.confirm("Would you like your password to have SPECIAL CHARACTERS");
        if(wantSpecialCharacters){
          randomSpecialCharacter = passwordCriteria.specialCharacter[Math.floor(Math.random() * passwordCriteria.specialCharacter.length)];
          console.log(randomSpecialCharacter);
          finalPassword.push(randomSpecialCharacter);
          console.log("finalPassword: " + finalPassword);
        }

      }
      
      if (!wantLowerCase || !wantUpperCase || !wantNumbers || !wantSpecialCharacters){
        console.log("user does not want anything");
        window.alert("You need to choose at least one option. Try again!");
      }
    }
  }
  //--------The End--------
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
