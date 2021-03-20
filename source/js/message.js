import {isEscEvent} from './util.js';

const POSITION_MESSAGE = 1000;

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const successMessage = successMessageTemplate.cloneNode(true);
const errorMessage = errorMessageTemplate.cloneNode(true);

const closeButton = errorMessage.querySelector('.error__button');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    removeMessage();
  }
};

const onClick = (evt) => {
  evt.preventDefault();
  removeMessage();
};

const showSuccessMessage = () => {
  successMessage.style.zIndex = String(POSITION_MESSAGE);
  document.body.appendChild(successMessage);
  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onPopupEscKeydown);
}

const showErrorMessage = () => {
  errorMessage.style.zIndex = String(POSITION_MESSAGE);
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onClick);
  closeButton.addEventListener('click', onClick);
};

const removeMessage = () => {
  document.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onPopupEscKeydown);

  if (successMessage) {
    successMessage.remove();
  }
  closeButton.removeEventListener('click', onClick);

  if (errorMessage) {
    errorMessage.remove();
  }
};

export {showSuccessMessage, showErrorMessage}




