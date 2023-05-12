import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const input = document.querySelector('.feedback-form input');

const textarea = document.querySelector('.feedback-form textarea');

const UserData = {
  email: input.value,
  message: textarea.value,
};

populaTestArea();

form.addEventListener('submit', onFormSubmit);

textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();

  if (textarea.value === '' || input.value === '') {
    alert('Please fill in all the fields');
    return;
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(UserData);
}

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);

  console.log(evt.target.value);
}

function populaTestArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);

    textarea.value = savedMessage;
  }
}
