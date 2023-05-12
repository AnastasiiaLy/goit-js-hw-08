import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const input = document.querySelector('.feedback-form input');

const textarea = document.querySelector('.feedback-form textarea');

const userData = {};

populatTextArea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onInputSubmit);

textarea.addEventListener('input', throttle(onInputSubmit, 500));

function onFormSubmit(evt) {
  evt.preventDefault();

  if (textarea.value === '' || input.value === '') {
    alert(
      'To proceed, please ensure that you have filled out all the fields in the form'
    );
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(userData);
}

function onInputSubmit(evt) {
  // console.log(evt.target.name);
  // console.log(evt.target.value);
  userData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function populatTextArea() {
  const savedUserData = localStorage.getItem(STORAGE_KEY);

  if (savedUserData) {
    const userData = JSON.parse(savedUserData);

    input.value = userData.email;
    textarea.value = userData.message;
  }
}
