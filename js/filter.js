/* global _:readonly */

import {setMarkers, removeMarkers} from './map.js'

const OFFERS_COUNT = 10;
const PRICE_LOW = 10000;
const PRICE_HIGH = 50000;
const RERENDER_DELAY = 500;

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = mapFilters.querySelector('#housing-type');
const housingPriceFilter = mapFilters.querySelector('#housing-price');
const housingRoomsFilter = mapFilters.querySelector('#housing-rooms');
const housingGuestsFilter = mapFilters.querySelector('#housing-guests');
const FeaturesFilter = document.querySelector('.map__features');

const filterByType = (offer) => offer.offer.type === housingTypeFilter.value || housingTypeFilter.value === 'any';
const filterByRooms = (offer) => offer.offer.rooms === Number(housingRoomsFilter.value) || housingRoomsFilter.value === 'any';
const filterByGuests = (offer) => offer.offer.guests === Number(housingGuestsFilter.value) || housingGuestsFilter.value === 'any';

const filterByFeatures = (offer) => {
  const checkedFeatures = FeaturesFilter.querySelectorAll('input:checked');
  if (checkedFeatures.length === 0) {
    return true;
  }

  for (let i = 0; i < checkedFeatures.length; i ++) {
    if (!offer.offer.features.includes(checkedFeatures[i].value)) {
      return false;
    }
  }

  return true;
}

const filterByPrice = (offer) => {
  const offerPrice = offer.offer.price;
  const filterPrice = housingPriceFilter.value;

  if (filterPrice === 'low') {
    return offerPrice < PRICE_LOW;
  }

  if (filterPrice === 'middle') {
    return offerPrice >= PRICE_LOW && offerPrice <= PRICE_HIGH;
  }

  if (filterPrice === 'high') {
    return offerPrice > PRICE_HIGH;
  }

  return true;
}

const getFilteredMarkers = (offers) => {
  const filteredOffers = offers.filter((offer) =>
    filterByType(offer) &&
    filterByGuests(offer) &&
    filterByRooms(offer) &&
    filterByPrice(offer) &&
    filterByFeatures(offer));

  setMarkers(filteredOffers.slice(0, OFFERS_COUNT));
}

const recreateMarkers = _.debounce((offers) => {
  removeMarkers();
  getFilteredMarkers(offers);
}, RERENDER_DELAY);

const initFilterChangeListener = (offers) => {
  mapFilters.addEventListener('change', () => {
    recreateMarkers(offers);
  });
}

export {initFilterChangeListener}
