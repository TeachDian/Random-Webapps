// Function to generate a password based on selected options
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let allChars = '';
    if (includeLowercase) allChars += lowercase;
    if (includeUppercase) allChars += uppercase;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    return password;
}

// Update length display
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
lengthSlider.addEventListener('input', function() {
    lengthValue.textContent = lengthSlider.value;
});

// Generate password on button click
document.getElementById('generate-button').addEventListener('click', function() {
    const length = parseInt(lengthSlider.value, 10);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    
    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('password-result').textContent = password;
});

// Reset all inputs and results
document.getElementById('reset-button').addEventListener('click', function() {
    lengthSlider.value = 8;
    lengthValue.textContent = 8;
    document.getElementById('include-lowercase').checked = true;
    document.getElementById('include-uppercase').checked = true;
    document.getElementById('include-numbers').checked = true;
    document.getElementById('include-symbols').checked = true;
    document.getElementById('password-result').textContent = '';
});

// Toggle dark/light theme
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Copy password to clipboard
document.getElementById('copy-button').addEventListener('click', function() {
    const password = document.getElementById('password-result').textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }, () => {
            alert('Failed to copy password.');
        });
    } else {
        alert('No password to copy.');
    }
});
