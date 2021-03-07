import {onSelectType, onSelectTime, deactivateForm, onSelectGuestAmount, setMainFormSubmit, setMainFormReset} from './form.js';
// import './message.js';
import {initMap} from './map.js'
import {showGetErrorMessage} from './util.js';
import {getData} from './api.js'
const OFFERS_COUNT = 10;


onSelectType();
onSelectTime();
deactivateForm();
onSelectGuestAmount();
setMainFormSubmit();
setMainFormReset();

getData((data) => {
  initMap(data.slice(0, OFFERS_COUNT));
}, showGetErrorMessage);
