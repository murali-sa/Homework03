// Assignment Code
var generateBtn = document.querySelector("#generate");
//
// Write password to the #password input
//
function writePassword() {
  // 
  // call function generate password
  //
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //
  // assign the text value to the password;
  //
  passwordText.textContent = password;
}
//
// end write password function
//
// start - generate password function
//
function generatePassword() {
  // 
  // get password length
  //
  var eCounter = document.getElementById("count");
  pwdLength = eCounter.textContent;
  //  
  // set - required upper case, lower case, special characters, and numbers
  // in the future, check boxes may be added to toggle these
  //
  var pwdUppercase = true;
  var pwdLowercase = true;
  var pwdSpecial = true;
  var pwdNumbers = true;
  //
  // set an array for possible password characters
  // determine the array length
  //
  var arrPossiblecharacters = "#%!@$/*{}[]-=_)(1234567890BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var arrPossiblelength = arrPossiblecharacters.length;
  //
  // random number generator picks a number between 0 and 1
  // it is a uniform distribution (every number between 0 ad 1 is equally likely)
  // 0 to arrPossiblelength - 70 characters
  // pick "n" random numbers-where n = pwdLength
  // 
  // reset password
  //
  var newPassword = [];
  //
  // loop thru "number of characters in the password"
  //
  for (var i = 0; i < pwdLength; i++) {
    // 
    // get a random number index between 0 and max
    //
    // random number generator
    // input parameter = max number of index values
    // output value is a randomly generated index number
    // for example, for a max of 70-random number generator
    // will return a value between 1 and 70
    // need index between 0 and 69
    // therefore subtract one from the generated value
    //
    randNumber = Math.floor(Math.random() * (arrPossiblelength-1))+1;
    //
    // building the password - one character at a time
    //
    newPassword+=(arrPossiblecharacters[randNumber-1]);
   }
   // end for loop
   //
// function to return the completed password
  return newPassword;
// 
}
 
//
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
