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

//Shuffle the contents of the finalPassword array
//Resource: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(finalPassword) {
  let currentIndex = finalPassword.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [finalPassword[currentIndex], finalPassword[randomIndex]] = [
      finalPassword[randomIndex],
      finalPassword[currentIndex],
    ];
  }
  return finalPassword;
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

    //Initialize passwordLength and finalPassword
    var passwordLength = "";
    var finalPassword = [];

    //Force user to enter a valid number
    while (!passwordLengthIsValid(passwordLength)) {
      passwordLength = window.prompt(
        "How many characters would you like your password to have?\nYour password must have between 8-128 characters.\nPassword length must be a whole number with no decimals."
      );
    }

    //If password length meets our valication requirements ask the user the following questions
    if (passwordLengthIsValid(passwordLength)) {
      wantLowerCase = window.confirm("Would you like your password to have LOWER CASE characters?");
      wantUpperCase = window.confirm("Would you like your password to have UPPER CASE characters?");
      wantNumbers = window.confirm("Would you like your password to have NUMBERS?");
      wantSpecialCharacters = window.confirm("Would you like your password to have SPECIAL CHARACTERS");

      while (finalPassword.length < passwordLength) {
        if (wantLowerCase){
          randomLowerCaseCharacter = passwordCriteria.lowerCase[Math.floor(Math.random() * passwordCriteria.lowerCase.length)];
          finalPassword.push(randomLowerCaseCharacter);
        }

        if (wantUpperCase){
          randomUpperCaseCharacter = passwordCriteria.upperCase[Math.floor(Math.random() * passwordCriteria.upperCase.length)];
          finalPassword.push(randomUpperCaseCharacter);
        }

        if (wantNumbers) {
          randomNumer = passwordCriteria.number[Math.floor(Math.random() * passwordCriteria.number.length)];
          finalPassword.push(randomNumer);
        }

        if (wantSpecialCharacters) {
          randomSpecialCharacter = passwordCriteria.specialCharacter[Math.floor(Math.random() * passwordCriteria.specialCharacter.length)];
          finalPassword.push(randomSpecialCharacter);
        }

        if (!wantLowerCase && !wantUpperCase && !wantNumbers && !wantSpecialCharacters) {
          window.alert("Hmm, you did not select an option. Let's try again!");
          generatePassword(passwordLength);
        }
      }
      shuffle(finalPassword);
    }
    //finalPassword without commas
    return finalPassword.join("");
  }
  //--------The End--------
  return generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
