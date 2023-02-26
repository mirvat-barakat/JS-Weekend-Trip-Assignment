var form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  var name = form.querySelector('#username').value.trim();
  var email = form.querySelector('#email').value.trim();
  var password = form.querySelector('#password').value.trim();
  var confirmPassword = form.querySelector('#confirmpassword').value.trim();
  var phone = form.querySelector('#phone').value.trim();

  if (name === '' || email === '' || password === '' || confirmPassword === '' || phone === '') {
    alert('Please fill out all fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  if (!validatePassword(password)) {
    alert('Password must contain at least 8 characters, one special character, and one upper case letter');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }
  function validatePassword(password) {
    var regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }
  
  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  var form_data = {
    name,
    email,
    password,
    phone
  };
  console.log(JSON.stringify(form_data));
  window.location.href = 'index2.html';
});