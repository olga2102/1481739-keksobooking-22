import {onSelectType, onSelectTime, deactivateForm, onSelectGuestAmount, setMainFormSubmit, handleFormReset} from './form.js';
// import './message.js';
import {initMap} from './map.js'
import {showGetErrorMessage} from './util.js';
import {getData} from './api.js'

onSelectType();
onSelectTime();
deactivateForm();
onSelectGuestAmount();
setMainFormSubmit();
handleFormReset();

getData((data) => {
  initMap(data);
}, showGetErrorMessage);
