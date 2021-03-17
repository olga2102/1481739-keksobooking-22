/* global L:readonly */
import {activateForm} from './form.js';
import {createCard} from './popup.js';
import {initFilterChangeListener} from './filter.js'

const MAIN_LATITUDE = 35.68950;
const MAIN_LONGITUDE = 139.69171;

const address = document.querySelector('#address');
const map = L.map('map-canvas');
const markers = [];
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const offerPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

const mainPinMarker = L.marker(
  {
    lat: MAIN_LATITUDE,
    lng: MAIN_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const setAddress = () => {
  address.value = `${MAIN_LATITUDE}, ${MAIN_LONGITUDE}`;
};

mainPinMarker.on('moveend', (evt) => {
  const formattedLat = evt.target.getLatLng().lat.toFixed(5);
  const formattedLng = evt.target.getLatLng().lng.toFixed(5);

  address.value = `${formattedLat}, ${formattedLng}`
});

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng(L.latLng(MAIN_LATITUDE, MAIN_LONGITUDE));
}

const initMap = (offers) => {

  map.on('load', () => {
    activateForm();
    setAddress();
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

  mainPinMarker.addTo(map);
  setMarkers(offers);
  initFilterChangeListener(offers);
}

const setMarkers = (offers) => {
  for(const offer of offers) {
    const {lat, lng} = offer.location;

    const offerMarker = L.marker({
      lat,
      lng,
    },
    {
      offerPinIcon,
    },
    );

    offerMarker.addTo(map).bindPopup(createCard(offer));

    markers.push(offerMarker);
  }
}

const removeMarkers = () => {
  markers.forEach(marker => {
    marker.remove();
  })
};

export {initMap, address, setAddress, resetMainPinMarker, setMarkers, removeMarkers}
