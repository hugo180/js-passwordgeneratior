// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
  let lowerC = 'abcdefghijklmnopqrstuvwxyz';
  let upperC = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let numb = '1234567890';
  let specialch = '~!@#$%^&*()_+{}:?><;.,';
  let password = '';
  let avalChars = '';

let pwLength = prompt('Please indicate a password length between 8 and 128.')

if (pwLength >= 8 && pwLength <= 128) {
  console.log(pwLength)
}
else {
  alert('Your password must be at least 8, but no more than 128, characters \nPlease enter a valid number between 8 & 128.')
  return '';
}

let LowerCase = confirm('would you like to add lowercase letters?')
if (LowerCase) {
  avalChars += lowerC
}
let upperCase = confirm('would you like to add upperCase letters?')
if (upperCase) {
  avalChars += upperC
}
let numbers = confirm('would you like to add numbers?')
if (numbers) {
  avalChars += numb
}
let specialcharacters = confirm('would you like to add special characters?')
if (specialcharacters) {
  avalChars += specialch
}
if (
  !LowerCase && !upperCase && !numbers && !specialcharacters
) {
  return alert('Please select at least one criteria!');
  
}

for (let i = 0; i < pwLength; i++) {
  password +=avalChars[Math.floor(Math.random () * avalChars.length)];
}
return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
