

function generatePassword(){

    const passwordLength = document.getElementById(`length`).value;
    let includeLowercase = document.getElementById(`includelowercase`).checked;
    let includeUppercase = document.getElementById(`includeuppercase`).checked;
    let includeNumbers = document.getElementById(`includenumbers`).checked;
    let includeSymbols = document.getElementById(`includesymbols`).checked;
   

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "1234567890";
    const symbols = "!@#$%^&*()_+=-~?><,.";


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numChars : "";
    allowedChars += includeSymbols ? symbols : "";

    if(allowedChars.length === 0){
        document.getElementById(`pass`).textContent = `Password length should be greater than 0 and make sure checkboxes are marked`;
        return;
    }

    for(let i =0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById(`pass`).textContent = `Your generated password: ${password}`;

}

