
const urlInput = document.getElementById('url');
const saveButton = document.getElementById('save');
const statusDiv = document.getElementById('status');

// Load saved URL when the popup is opened
document.addEventListener('DOMContentLoaded', () => {
    
    const savedInput = localStorage.getItem('userInput');
    if (savedInput) {
        urlInput.value = savedInput;
    }
});

// Function to validate the URL
function validateUrl(url) {
  // Regular expression to validate the URL format
  const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?$/i;

  // Check if URL is empty or does not match the pattern
  if (!url || !urlPattern.test(url)) {
    return false;
  }

  return true;
}


// Save the URL when the button is clicked
saveButton.addEventListener('click', () => {
    const url = urlInput.value.trim();

     // Validate the URL
     if (!validateUrl(url)) {
       statusDiv.textContent = 'Please enter a valid URL.';
       statusDiv.style.color = 'red';
       return;
     }

     let finalUrl = url;
     if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
       finalUrl = 'https://' + finalUrl;
     }

     try {
       // Save the URL to localStorage
       localStorage.setItem('userInput', finalUrl);
       statusDiv.textContent = 'Redirect url saved';
       statusDiv.style.color = 'green';

       // Close the window after 1 second
       setTimeout(() => window.close(), 1000);
     } catch (error) {
       console.error('Error saving URL:', error);
       statusDiv.textContent = 'Failed to save URL!';
       statusDiv.style.color = 'red';
     }
});

