document.getElementById('convert-button').addEventListener('click', function() {
    const decimalNumber = document.getElementById('decimal-input').value;
    
    if (decimalNumber !== "") {
        const binaryResult = parseInt(decimalNumber, 10).toString(2);
        const octalResult = parseInt(decimalNumber, 10).toString(8);
        const hexadecimalResult = parseInt(decimalNumber, 10).toString(16).toUpperCase();
        
        document.getElementById('binary-result').textContent = binaryResult;
        document.getElementById('octal-result').textContent = octalResult;
        document.getElementById('hexadecimal-result').textContent = hexadecimalResult;
    } else {
        alert("Please enter a valid decimal number.");
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('decimal-input').value = "";
    document.getElementById('binary-result').textContent = "";
    document.getElementById('octal-result').textContent = "";
    document.getElementById('hexadecimal-result').textContent = "";
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
