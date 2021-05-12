// Assignment Code
// special chars array
var specialChars = ["!", ",", "@", "#", "$", "$", "%", "ˆ", "&", "*", "(", ")", "_", "-", "{", "}", "[", "]"];

// number Array 
var numbArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// lower case array
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Upper case array
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function to prompt the user for password options
function getPassword() {

    // Create a variable to store the lenght of password
    var length = parseInt(
        prompt("How many characters would you like your password to be?")
    );

    // Create conditional statement to check if password lenght is actually a number
    if (Number.isNaN(length)) {
        alert("password must be a number");
        return;
    }

    // Conditional statement to check if password is atleast 8 chars
    if (length < 8) {
        alert("Password length must be AT LEAST 8 characters")
        return;
    };

    // Conditional statement to check if password lenght is at least 128 characters 
    if (length > 128) {
        alert("Password cannot contain more than 128 chars!!");
        return;
    };

    // Create confirmation prompts for the type of characters the user wants to use in there password. 
    var includeSpecialChars = confirm("What type of characters would you like to use in your password?");
    var includeNumbArray = confirm("Which numbers would you like to use in your password?");
    var includeUpperCase = confirm("Would you like upper-cases in your password?");
    var includeLowerCase = confirm("Would you like lower-cases in your password?");


    // Need to create a conditional statement to check if user included ATLEAST 1 of the char types. Return user back to start of application 
    var includeNumbArray = confirm("Would you like to use numbers in your password?");

    if (includeNumbArray !== "Yes" && includeNumbArray !== "No") {
        alert("Click on Yes or No");
        return;
    } else if (includeNumbArray === "Yes") {
        options.includeNumbArray = numbArray;
    } else {

    }
    var includeSpecialChars = confirm("Would you like to use characters in your password?");

    if (includeSpecialChars !== "Yes" && includeSpecialChars !== "No") {
        alert("Click on Yes or No");
        return;
    } else if (includeSpecialChars === "Yes") {
        options.includeSpecialChars = specialchars;
    } else {

    }
    var includeUpperCase = confirm("Would you like to use Upper-case in your password?");

    if (includeUpperCase !== "Yes" && includeUpperCase !== "No") {
        alert("Click on Yes or No");
        return;
    } else if (includeUpperCase === "Yes") {
        options.includeUpperCase = upperCase;
    } else {

    }
    var includeLowerCase = confirm("Would you like to use Lower-case in your password?");

    if (includeLowerCase !== "Yes" && includeLowerCase !== "No") {
        alert("Click on Yes or No");
        return;
    } else if (includeLowerCase === "Yes") {
        options.includeLowerCase = lowerCase;
    } else {

    }




    // Create an object to store the user input
    var possiblePass = {
        // We need to store length and all characters selected by User
        length: includeLength,
        specialChars: includeSpecialChars,
        numbArray: includeNumbArray,
        upperCase: includeUpperCase,
        lowerCase: includeLowerCase,
    }
    // console.log(possiblePass);
    return possiblePass;

}

// Create a function for getting a random element from an array
function generatePassword(array) {
    var random = Math.floor(Math.random() * arr.length);

    // some kind of math problem arr.length 
    //  Save them to a variable (Check Rock Paper Scissors)
    // var random = arr[random]

    return random;
}

// Create a function to generate the password with the user input
function generatingPassword() {

    // set a variable to call my getPassword function
    var options = getPassword();
    console.log(options)

    // variable to store the password as it being concatenated
    var passResult = [];

    // Create a variable to store the types of characters to include into the password
    var possibleChars = [];

    // Create a variable to store each type of guaranted characters 
    var guarChars = [];

    // Write a condition that adds the array for special characters into the array of possible characters bassed on the user input
    //  than push the new random characters into guaranted characters.
    // Two methods to look up here are : - push & - concat

    if (options.specialChar) {
        includeSpecialChars = includeSpecialChars.concat(specialChar);
    }
    if (options.lowerCase) {
        possibleChars = possibleChars.concat(lowerCase);
    }
    if (options.upperCase) {
        possibleChars = possibleChars.concat(upperCase);
    }
    if (options.numbArray) {
        possibleChars = possibleChars.concat(numbArray);
    }



    // Create a for loop to iterate over the password length form from the options object.
    for (var i = 0; i < options.length; i++) {
        var possibleCharacters = generatePassword(possibleCharacters);

        passResult.push(possibleCharacter)
    }
    return passResult.join('');

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatingPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);