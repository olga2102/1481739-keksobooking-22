import {createSimilarOffers} from './data.js';
import {OFFER_TYPES} from './data.js';

const similarOffers = createSimilarOffers();

const renderSimilarOffers = (similarOffers) => {
  const placeForCard = document.querySelector('#map-canvas');
  const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const similarListFragment = document.createDocumentFragment();

  similarOffers.forEach((author, offer) => {
    const separateElement = similarCardTemplate.cloneNode(true);

    separateElement.querySelector('.popup__avatar').src = author.avatar;
    separateElement.querySelector('.popup__title').textContent = offer.title;
    separateElement.querySelector('.popup__text--address').textContent = offer.address;
    separateElement.querySelector('.popup__type').textContent  = OFFER_TYPES[offer.type];
    separateElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    separateElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    separateElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    const featureListElement = separateElement.querySelector('.popup__features');
    featureListElement.innerHTML = '';
    for (let i = 0; i < offer.features.length; i++) {
      const feature = document.createElement('li');
      const featureClass = `popup__feature--${offer.features[i]}`;
      feature.classList.add('popup__feature', featureClass);
      featureListElement.appendChild(feature);
    }

    separateElement.querySelector('.popup__description').textContent = offer.description;

    const photoListElement = separateElement.querySelector('.popup__photos');
    photoListElement.innerHTML = '';
    for (let i = 0; i < offer.photos.length; i++) {
      const photoElement = document.createElement('img');
      photoElement.src = offer.photos[i];
      photoListElement.appendChild(photoElement);
    }

    similarListFragment.appendChild(separateElement);
  });

  placeForCard.appendChild(similarListFragment);
};

renderSimilarOffers(similarOffers);

export {renderSimilarOffers}
