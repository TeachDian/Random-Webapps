// Function to load content into the main section
function loadContent(contentId) {
    const mainContent = document.getElementById('main-content');
    fetch(`${contentId}.html`)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
            const script = document.createElement('script');
            script.src = `${contentId}.js`;
            mainContent.appendChild(script);
        });
}

// Add event listeners to navigation links
document.getElementById('number-converter-link').addEventListener('click', function() {
    loadContent('number-converter');
});

document.getElementById('password-generator-link').addEventListener('click', function() {
    loadContent('password-generator');
});

// Toggle dark/light theme
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Load the Number Converter by default
loadContent('number-converter');
