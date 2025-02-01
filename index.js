// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    const html = document.documentElement;
    const button = document.getElementById('themeToggle');
    
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
    
    button.textContent = theme === 'light' ? '🌙 Toggle Theme' : '☀️ Toggle Theme';
    localStorage.setItem('theme', theme);
}

// UTC Time management
function updateUTCTime() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    timeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
}

// Initialize everything when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Add theme toggle event listener
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Initialize and start UTC time updates
    updateUTCTime();
    // Update time every second
    setInterval(updateUTCTime, 1000);
});