const form = document.querySelector('.submit-form');
const emailInput = document.querySelector('.input-field-mail');
const messageInput = document.querySelector('.input-field-message');

const savedDataLS =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedDataLS.email || '';
messageInput.value = savedDataLS.message || '';

form.addEventListener('input', function (e) {
  if (e.target === emailInput || e.target === messageInput) {
    localStorage.removeItem('feedback-form-state');
    const currentDataLS = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentDataLS));
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (emailInput.value && messageInput.value) {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Please fill in both form fields');
  }
});
