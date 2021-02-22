const mainForm = document.querySelector('.ad-form');
const timeIn = mainForm.querySelector('#timein');
const timeOut = mainForm.querySelector('#timeout');
const price = mainForm.querySelector('#price');
const propertyType = mainForm.querySelector('#type');

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

export {onSelectType, onSelectTime}
