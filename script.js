// Function to generate a random password based on criteria
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  // Character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?/";

  // Combine character sets based on user selection
  var allChars = "";
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  // Generate password by randomly selecting characters
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Prompt for password criteria
  var includeLowercase = window.prompt("Include lowercase characters? (yes/no)").toLowerCase() === 'yes';
  var includeUppercase = window.prompt("Include uppercase characters? (yes/no)").toLowerCase() === 'yes';
  var includeNumeric = window.prompt("Include numeric characters? (yes/no)").toLowerCase() === 'yes';
  var includeSpecial = window.prompt("Include special characters? (yes/no)").toLowerCase() === 'yes';
  // Prompt for password length
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  // Validate password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a valid length between 8 and 128 characters.");
    return;
  }

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type for the password.");
    return;
  }


  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}
