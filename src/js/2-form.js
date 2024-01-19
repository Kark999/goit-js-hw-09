const form = document.querySelector('.submit-form');
const emailInput = document.querySelector('.input-field-mail');
const messageInput = document.querySelector('.input-field-message');

const savedDataLS =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedDataLS.email || '';
messageInput.value = savedDataLS.message || '';

form.addEventListener('input', function (e) {
  if (e.target === emailInput || e.target === messageInput) {
    const currentDataLS = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(currentDataLS));
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
