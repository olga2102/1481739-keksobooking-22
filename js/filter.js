import {setMarkers, removeMarkers} from './map.js'

const OFFERS_COUNT = 10;

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = mapFilters.querySelector('#housing-type');
// const housingPriceFilter = mapFilters.querySelector('#housing-price');
// const housingRoomsFilter = mapFilters.querySelector('#housing-rooms');
// const housingGuestsFilter = mapFilters.querySelector('#housing-guests');
// const mapFeaturesFilter = document.querySelector('.map__features');


const getFilteredMarkers = (offers) => {
  housingTypeFilter.addEventListener('change', (evt) => {
    removeMarkers();
    setMarkers(offers
      .filter((offer) => offer.offer.type === evt.target.value || evt.target.value === 'any'))
      .slice(0, OFFERS_COUNT);
  });
//не смотри пока на это, я следующее задание пыталась начать
//   housingRoomsFilter.addEventListener('change', (evt) => {
//     removeMarkers();
//     setMarkers(offers
//       .filter((offer) => offer.offer.rooms === Number(evt.target.value) || evt.target.value === 'any'))
//       .slice(0, OFFERS_COUNT);
//   });
}

export {getFilteredMarkers}
