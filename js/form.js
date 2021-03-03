import {address} from './map.js'

const mainForm = document.querySelector('.ad-form');
const timeIn = mainForm.querySelector('#timein');
const timeOut = mainForm.querySelector('#timeout');
const price = mainForm.querySelector('#price');
const propertyType = mainForm.querySelector('#type');
const mapFilters = document.querySelector('.map__filters');
const fieldMapForm = mapFilters.querySelectorAll('.map__filter');
const fieldForm = mainForm.querySelectorAll('.ad-form fieldset');
const titleForm = mainForm.querySelector('#title');
const priceForm = mainForm.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const roomCapacities = document.querySelector('#capacity');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const priceForType = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const allowedValuesRoomsforGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
}
//вот с этим трабл
const onRoomsSelectChange = (evt) => {
  const selectedRoomOption = evt.target.value; //значение количества комнат 1, 2, 3, 100
  const allowedSeats = allowedValuesRoomsforGuests[selectedRoomOption]; // массив количества гостей

  for (let i = 0; i < roomCapacities.length; i ++) {
    const optionValueCapacity = roomCapacities[i].value; //значение количества гостей
    const isOptionAllowed = allowedSeats.includes(optionValueCapacity); //включение в массив значений количества гостей

    if (!isOptionAllowed) {
      roomCapacities[i].disabled = true;
    } else {
      roomCapacities[i].selected = true;
      roomCapacities[i].disabled = false;
    }
  }
}

roomNumber.addEventListener('change', onRoomsSelectChange);

const setInitialRoomsAmount = () => {
  const capacity = roomCapacities.value;
  roomNumber.value = capacity;
};

const onSelectGuestAmount = () => {
  roomCapacities.addEventListener('change', (evt) => {
    roomNumber.value = evt.target.value;
  });
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

const deactivateForm = () => {
  mainForm.classList.add('ad-form--disabled');

  for( let i = 0; i < fieldForm.length; i++ ) {
    fieldForm[i].disabled = true;
  }

  mapFilters.classList.add('ad-form--disabled');

  for( let i = 0; i < fieldMapForm.length; i++ ) {
    fieldMapForm[i].disabled = true;
  }
}

const activateForm = () => {
  setInitialRoomsAmount();
  mainForm.classList.remove('ad-form--disabled');

  for( let i = 0; i < fieldForm.length; i++ ) {
    fieldForm[i].disabled = false;
  }

  mapFilters.classList.remove('ad-form--disabled');

  for( let i = 0; i < fieldMapForm.length; i++ ) {
    fieldMapForm[i].disabled = false;

    address.setAttribute('readonly', 'readonly');
  }
}

titleForm.addEventListener('input', () => {
  const valueLength = titleForm.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleForm.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleForm.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
  } else if (titleForm.validity.valueMissing) {
    titleForm.setCustomValidity('Обязательное поле');
  } else {
    titleForm.setCustomValidity('');
  }
  titleForm.reportValidity();
});

priceForm.addEventListener('input', () => {
  const valuePrice = priceForm.value;

  if (valuePrice > MAX_PRICE) {
    priceForm.setCustomValidity(`Цена за ночь не может превышать ${MAX_PRICE}`);
  } else if (priceForm.validity.valueMissing) {
    priceForm.setCustomValidity('Обязательное поле');
  } else {
    priceForm.setCustomValidity('');
  }
  priceForm.reportValidity();
});

export {
  onSelectType,
  onSelectTime,
  deactivateForm,
  activateForm,
  onSelectGuestAmount
}
