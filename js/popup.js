import {appendContent} from './util.js';

const HouseTypeToMatch = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createFeatureElement = (element, content) => {
  if (content && content.length > 0) {
    element.innerHTML = '';

    for (let i = 0; i < content.length; i++) {
      const feature = document.createElement('li');
      const featureClass = `popup__feature--${content[i]}`;
      feature.classList.add('popup__feature', featureClass);
      element.appendChild(feature);
    }
  } else {
    element.remove();
  }
}

const createPhotoElement = (element, content) => {
  if (content && content.length > 0) {
    element.innerHTML = '';

    for (let i = 0; i < content.length; i++) {
      const photoElement = document.createElement('img');
      photoElement.src = content[i];
      photoElement.alt = 'Фотография жилья';
      photoElement.width = '45';
      photoElement.height = '40';
      element.appendChild(photoElement);
    }
  } else {
    element.remove();
  }
}

const createCard = ({offer, author}) => {
  const separateElement = similarCardTemplate.cloneNode(true);

  const elementAvatar =   separateElement.querySelector('.popup__avatar');
  const elementTitle =  separateElement.querySelector('.popup__title');
  const elementAddress =  separateElement.querySelector('.popup__text--address');
  const elementPrice =  separateElement.querySelector('.popup__text--price');
  const elementType =  separateElement.querySelector('.popup__type');
  const elementCapacity =  separateElement.querySelector('.popup__text--capacity');
  const elementTime =  separateElement.querySelector('.popup__text--time');
  const elementFeatures =  separateElement.querySelector('.popup__features');
  const elementDescription =  separateElement.querySelector('.popup__description');
  const elementPhotos =  separateElement.querySelector('.popup__photos');

  appendContent(elementAvatar, author.avatar, 'src');
  appendContent(elementTitle, offer.title, 'textContent');
  appendContent(elementAddress, offer.address, 'textContent');
  appendContent(elementType, HouseTypeToMatch[offer.type], 'textContent');
  appendContent(elementPrice, `${offer.price} ₽/ночь`, 'textContent');
  appendContent(elementCapacity, `${offer.rooms} комнаты для ${offer.guests} гостей`, 'textContent');
  appendContent(elementTime, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`, 'textContent');
  appendContent(elementDescription, offer.description, 'textContent');
  createFeatureElement(elementFeatures, offer.features);
  createPhotoElement(elementPhotos, offer.photos);

  return separateElement;
};

export {createCard}
