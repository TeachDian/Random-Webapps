// Function to convert decimal to binary, octal, and hexadecimal
function convertNumber() {
    const decimal = parseInt(document.getElementById('decimal-input').value, 10);
    document.getElementById('binary-result').textContent = decimal.toString(2);
    document.getElementById('octal-result').textContent = decimal.toString(8);
    document.getElementById('hexadecimal-result').textContent = decimal.toString(16).toUpperCase();
}

// Reset all inputs and results
document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('decimal-input').value = '';
    document.getElementById('binary-result').textContent = '';
    document.getElementById('octal-result').textContent = '';
    document.getElementById('hexadecimal-result').textContent = '';
});

// Convert number on button click
document.getElementById('convert-button').addEventListener('click', convertNumber);
