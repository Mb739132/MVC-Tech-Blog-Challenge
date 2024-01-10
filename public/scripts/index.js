document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('.text-light[href="/"]');
  const dashboardLink = document.querySelector('.text-light[href="/dashboard"]');
  const loginLink = document.querySelector('.text-light[href="#login"]');
  const logoutLink = document.querySelector('.text-light[href="#logout"]');
  const tipForm = document.getElementById('tip-form');
  const tipsContainer = document.getElementById('tip-container');
  const fbBtn = document.getElementById('feedback-btn');

  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'index.html';
    });
  }

  if (dashboardLink) {
    dashboardLink.addEventListener('click', (e) => {
      e.preventDefault();
      promptSignUpOrSignIn();
    });
  }

  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }

  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      handleLogout();
    });
  }

  fbBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/feedback';
  });

  const createCard = (tip) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card', 'mb-3', 'm-3');
    cardEl.setAttribute('key', tip.tip_id);

    const cardHeaderEl = document.createElement('h4');
    cardHeaderEl.classList.add('card-header', 'bg-primary', 'text-light', 'p-2', 'm-0');
    cardHeaderEl.innerHTML = `${tip.username} </br>`;

    const cardBodyEl = document.createElement('div');
    cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
    cardBodyEl.innerHTML = `<p>${tip.tip}</p>`;

    cardEl.appendChild(cardHeaderEl);
    cardEl.appendChild(cardBodyEl);

    tipsContainer.appendChild(cardEl);
  };

  const getTips = () =>
    fetch('/api/tips', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });

  const postTip = (tip) =>
    fetch('/api/tips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tip),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
        createCard(tip);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  const validateTip = (newTip) => {
    const { username, topic, tip } = newTip;

    const errorState = {
      username: username.length >= 4 ? '' : 'Invalid username!',
      tip: tip.length > 15 ? '' : 'Tip must be at least 15 characters',
      topic: topic.includes('UX' || 'UI') ? '' : 'Topic not relevant to UX or UI',
    };

    const result = {
      isValid: !Object.values(errorState).some((error) => error.length > 0),
      errors: errorState,
    };

    return result;
  };

  const showErrors = (errorObj) => {
    const errors = Object.values(errorObj);
    errors.forEach((error) => {
      if (error.length > 0) {
        alert(error);
      }
    });
  };

  const submitDiagnostics = (submissionObj) => {
    fetch('/api/diagnostics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionObj),
    })
      .then((response) => response.json())
      .then(() => showErrors(submissionObj.errors))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
});