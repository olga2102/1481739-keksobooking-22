import {address} from './map.js'

const mainForm = document.querySelector('.ad-form');
const timeIn = mainForm.querySelector('#timein');
const timeOut = mainForm.querySelector('#timeout');
const price = mainForm.querySelector('#price');
const propertyType = mainForm.querySelector('#type');
const mapFilters = document.querySelector('.map__filters');
const fieldMapForm = mapFilters.querySelectorAll('.map__filter');
const fieldForm = mainForm.querySelectorAll('.ad-form fieldset');

const priceForType = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const getHousingPrice = (type) => {
  return priceForType[type];
};

const onSelectType = () => {
  propertyType.addEventListener('change', () => {
    price.placeholder = getHousingPrice(propertyType.value);
    price.min = getHousingPrice(propertyType.value);
  });
}

const onSelectTime = () => {
  timeIn.addEventListener('change', (evt) => {
    timeOut.value = evt.target.value;
  });

  timeOut.addEventListener('change', (evt) => {
    timeIn.value = evt.target.value;
  });
}

const inactivateForm = () => {
  mainForm.classList.add('ad-form--disabled');
}

const inactivateFields = () => {
  for( let i = 0; i < fieldForm.length; i++ ) {
    fieldForm[i].setAttribute('disabled', 'disabled');
  }
}

const inactivateMapForm = () => {
  mapFilters.classList.add('ad-form--disabled');
}

const inactivateMapFormFields = () => {
  for( let i = 0; i < fieldMapForm.length; i++ ) {
    fieldMapForm[i].setAttribute('disabled', 'disabled');
  }
}

const activateForm = () => {
  mainForm.classList.remove('ad-form--disabled');

  for( let i = 0; i < fieldForm.length; i++ ) {
    fieldForm[i].removeAttribute('disabled', 'disabled');
  }

  mapFilters.classList.remove('ad-form--disabled');

  for( let i = 0; i < fieldMapForm.length; i++ ) {
    fieldMapForm[i].removeAttribute('disabled', 'disabled');

    address.setAttribute('readonly', 'readonly');
  }
}

// const activateFields = () => {

// }

// const activateMapForm = () => {

// }

// const activateMapFormFields = () => {

// }

export {
  onSelectType,
  onSelectTime,
  inactivateForm,
  inactivateFields,
  inactivateMapForm,
  inactivateMapFormFields,
  activateForm
}
