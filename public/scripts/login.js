const handleLogout = () => {
    // Perform logout actions on the server-side (e.g., clear session)
    fetch('/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          // Successful logout, redirect to the dashboard
          window.location.href = '/dashboard';
        } else {
          // Handle logout failure
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };
  
  // ... (existing code)
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submit invoked');
  
    const tipContent = document.getElementById('tipText').value;
    const tipUsername = document.getElementById('tipUsername').value.trim();
  
    const newTip = {
      username: tipUsername,
      topic: 'UX',
      tip: tipContent,
    };
  
    const submission = validateTip(newTip);
  
    return submission.isValid ? postTip(newTip) : submitDiagnostics(submission);
  };
  
  tipForm.addEventListener('submit', handleFormSubmit);
  