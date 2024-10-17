//
//  redirect.js
//  TabRedirect
//
//  Created by Kiran Poudel on 14/10/2024.
//

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the saved URL from localStorage
  let savedUrl = localStorage.getItem('userInput');

  // If a URL is saved, redirect the user to that URL
  if (savedUrl) {
    // Check if the URL starts with "http://" or "https://"
    if (!savedUrl.startsWith('http://') && !savedUrl.startsWith('https://')) {
      // Automatically add "https://" if no protocol is present
      savedUrl = 'https://' + savedUrl;
    }

    // Redirect to the final URL
    window.location.replace(savedUrl);
  } else {
    // If no URL is saved, use a default URL
    window.location.replace("https://www.google.com");
  }
});
