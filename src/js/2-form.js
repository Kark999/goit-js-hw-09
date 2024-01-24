const form = document.querySelector('.feedback-form');

window.addEventListener('load', function () {
  const formDataFromLS =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  form.elements['email'].value = formDataFromLS.email || '';
  form.elements['message'].value = formDataFromLS.message || '';
});

form.addEventListener('input', function (e) {
  const target = e.target;

  if (target.type === 'email' || target.type === 'textarea') {
    const formDataToLS = {
      email: form.elements['email'].value.trim(),
      message: form.elements['message'].value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formDataToLS));
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = form.elements['email'];
  const messageInput = form.elements['message'];

  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (formData.email && formData.message) {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Please fill in both form fields');
  }
});
