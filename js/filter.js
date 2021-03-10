import {setMarkers, removeMarkers} from './map.js'

const OFFERS_COUNT = 10;

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = mapFilters.querySelector('#housing-type');

const getFilteredMarkers = (offers) => {
  housingTypeFilter.addEventListener('change', (evt) => {
    removeMarkers();
    setMarkers(offers
      .filter((offer) => offer.offer.type === evt.target.value))
      .slice(0, OFFERS_COUNT);
  });
}

export {getFilteredMarkers}
