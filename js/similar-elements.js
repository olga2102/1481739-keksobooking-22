import {appendContent} from './util.js';

const HOUSES_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const renderSimilarOffers = (similarOffers) => {
  const placeForCard = document.querySelector('#map-canvas');
  const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const similarListFragment = document.createDocumentFragment();

  similarOffers.forEach(({offer, author}) => {
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
    appendContent(elementType, HOUSES_TYPES[offer.type], 'textContent');
    appendContent(elementPrice, `${offer.price} ₽/ночь`, 'textContent');
    appendContent(elementCapacity, `${offer.rooms} комнаты для ${offer.guests} гостей`, 'textContent');
    appendContent(elementTime, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`, 'textContent');
    appendContent(elementDescription, offer.description, 'textContent');

    if (offer.features && offer.features.length > 0) {
      elementFeatures.innerHTML = '';

      for (let i = 0; i < offer.features.length; i++) {
        const feature = document.createElement('li');
        const featureClass = `popup__feature--${offer.features[i]}`;
        feature.classList.add('popup__feature', featureClass);
        elementFeatures.appendChild(feature);
      }
    } else {
      elementFeatures.remove();
    }

    if (offer.features && offer.features.length > 0) {
      elementPhotos.innerHTML = '';

      for (let i = 0; i < offer.photos.length; i++) {
        const photoElement = document.createElement('img');
        photoElement.src = offer.photos[i];
        photoElement.alt = 'Фотография жилья';
        photoElement.width = '45';
        photoElement.height = '40';
        elementPhotos.appendChild(photoElement);
      }
    } else {
      elementPhotos.remove();
    }


    similarListFragment.appendChild(separateElement);
  });

  placeForCard.appendChild(similarListFragment);
};

export {renderSimilarOffers}
