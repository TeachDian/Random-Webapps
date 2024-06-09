// Manual conversion functions
function decimalToBinary(decimal) {
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary || '0';
}

function decimalToOctal(decimal) {
    let octal = '';
    while (decimal > 0) {
        octal = (decimal % 8) + octal;
        decimal = Math.floor(decimal / 8);
    }
    return octal || '0';
}

function decimalToHexadecimal(decimal) {
    const hexChars = '0123456789ABCDEF';
    let hexadecimal = '';
    while (decimal > 0) {
        hexadecimal = hexChars[decimal % 16] + hexadecimal;
        decimal = Math.floor(decimal / 16);
    }
    return hexadecimal || '0';
}

// Pa shout out po idol next video
// Convert number on button clikc
document.getElementById('convert-button').addEventListener('click', function() {
    const decimalNumber = parseInt(document.getElementById('decimal-input').value, 10);
    
    if (!isNaN(decimalNumber)) {
        const binaryResult = decimalToBinary(decimalNumber);
        const octalResult = decimalToOctal(decimalNumber);
        const hexadecimalResult = decimalToHexadecimal(decimalNumber);
        
        document.getElementById('binary-result').textContent = binaryResult;
        document.getElementById('octal-result').textContent = octalResult;
        document.getElementById('hexadecimal-result').textContent = hexadecimalResult;
    } else {
        alert("Please enter a valid decimal number.");
    }
});

// Reset all inputs and results
document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('decimal-input').value = "";
    document.getElementById('binary-result').textContent = "";
    document.getElementById('octal-result').textContent = "";
    document.getElementById('hexadecimal-result').textContent = "";
});

// Toggle dark/light theme
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
