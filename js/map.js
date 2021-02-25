/* global L:readonly */
import {activateForm} from './form.js';
// import {renderSimilarOffers} from './similar-elements.js';

const MAIN_LATITUDE = 35.68950;
const MAIN_LONGITUDE = 139.69171;
const address = document.querySelector('#address');

const initMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activateForm();
      address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
    })
    .setView({
      lat: MAIN_LATITUDE,
      lng: MAIN_LONGITUDE,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  // const mainPinIcon = L.icon({
  //   iconUrl: 'img/main-pin.svg',
  //   iconSize: [52, 52],
  //   iconAnchor: [26, 52],
  // });

  // const mainPinMarker = L.marker(
  //   {
  //     lat: MAIN_LATITUDE,
  //     lng: MAIN_LONGITUDE,
  //   },
  //   {
  //     draggable: true,
  //     icon: mainPinIcon,
  //   },
  // );

  // mainPinMarker.addTo(map);

  // offers.forEach(({author, location, offer}) => {
  //   const offerPinIcon = L.icon({
  //     iconUrl: 'img/pin.svg',
  //     iconSize: [52, 52],
  //     iconAnchor: [26, 52],
  //   });

  //   const lat = location.x;
  //   const lng = location.y;

  //   const offerMarker = L.marker({
  //     lat,
  //     lng,
  //   },
  //   {
  //     offerPinIcon,
  //   },
  //   );

  //   offerMarker.addTo(map).bindPopup(renderSimilarOffers({author, offer}));
  // });
}


export {initMap, address}
